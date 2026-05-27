"use client";

import { Project2B } from "@/config/personal";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectModalProps = {
  project: Project2B | null;
  onClose: () => void;
};

const PLACEHOLDER_COUNT = 3;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);

  const images = project?.galleryImages.length
    ? project.galleryImages
    : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => `placeholder-${i}`);

  const total = images.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    setIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose, goPrev, goNext]);

  if (!project) return null;

  const hasRealImages = project.galleryImages.length > 0;
  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button
        type="button"
        className="ps-modal-overlay absolute inset-0"
        aria-label="关闭"
        onClick={onClose}
      />

      <div className="ps-modal relative z-10 w-full max-w-6xl">
        <div className="ps-modal-header flex items-center justify-between px-5 py-4">
          <div>
            <h3 className="ps-text-title text-lg font-semibold">{project.title}</h3>
            <p className="ps-text-muted text-sm">
              {index + 1} / {total}
              {!hasRealImages && " · 截图占位，稍后更新"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ps-modal-control rounded-lg p-2"
            aria-label="关闭弹窗"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="ps-modal-viewport relative flex aspect-[9/16] max-h-[80vh] w-full items-center justify-center sm:aspect-video sm:max-h-none">
          {hasRealImages ? (
            <Image
              src={current}
              alt={`${project.title} 截图 ${index + 1}`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : (
            <div className="ps-text-muted flex flex-col items-center gap-3">
              <div className="ps-placeholder aspect-auto h-32 w-20 justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-sm">示例截图 {index + 1}</span>
            </div>
          )}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="ps-modal-nav-btn absolute left-3"
                aria-label="上一张"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="ps-modal-nav-btn absolute right-3"
                aria-label="下一张"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="ps-modal-header flex justify-center gap-2 px-5 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`跳转到第 ${i + 1} 张`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? cn("w-6 ps-modal-dot-active") : cn("w-1.5 ps-modal-dot")
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
