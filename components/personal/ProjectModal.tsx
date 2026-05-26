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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="关闭"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-white/10 bg-[#141414] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
            <p className="text-sm text-zinc-500">
              {index + 1} / {total}
              {!hasRealImages && " · 截图占位，稍后更新"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
            aria-label="关闭弹窗"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex aspect-[9/16] max-h-[60vh] w-full items-center justify-center bg-[#0a0a0a] sm:aspect-video sm:max-h-none">
          {hasRealImages ? (
            <Image
              src={current}
              alt={`${project.title} 截图 ${index + 1}`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-zinc-500">
              <div className="flex h-32 w-20 items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50">
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
                className="absolute left-3 rounded-full border border-white/10 bg-black/50 p-2 text-zinc-300 transition hover:bg-black/80"
                aria-label="上一张"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 rounded-full border border-white/10 bg-black/50 p-2 text-zinc-300 transition hover:bg-black/80"
                aria-label="下一张"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center gap-2 border-t border-white/10 px-5 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`跳转到第 ${i + 1} 张`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-zinc-300" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              )}
            />
          ))}
        </div>

        {project.qrCode ? (
          <div className="border-t border-white/10 px-5 py-4 text-center">
            <p className="mb-2 text-sm text-zinc-500">扫码体验</p>
            <Image
              src={project.qrCode}
              alt={`${project.title} 二维码`}
              width={120}
              height={120}
              className="mx-auto rounded-lg"
            />
          </div>
        ) : (
          <div className="border-t border-white/10 px-5 py-4 text-center text-sm text-zinc-600">
            小程序二维码稍后提供
          </div>
        )}
      </div>
    </div>
  );
}
