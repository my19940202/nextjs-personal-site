import { projects2B } from './personal';
export type Section = { title: string; text: string };
export type Content = { slug: string; title: string; summary: string; sections: Section[]; related: string[]; updated?: string };
export const services: Content[] = [
  {slug:'workflow-automation',title:'企业流程自动化',summary:'将重复录入、需求收集、通知与订单管理整理为可维护的线上流程，适合希望减少手动交接的中小企业。',related:['house-decoration'],sections:[
    {title:'适合哪些业务',text:'工作散落在微信群、表格和人工通知中，需要反复录入、追问进度或整理订单的团队。先梳理信息如何进入、由谁处理、怎样确认完成，再决定自动化范围。'},
    {title:'可交付内容',text:'需求收集入口、业务管理页面、状态流转与通知流程。涉及既有系统时，先核实接口、权限和数据导出能力，再确认接入方案。'},
    {title:'实施步骤',text:'了解现有流程 → 确定首版范围与验收方式 → 开发和测试 → 部署上线 → 根据使用反馈优化。'},
    {title:'客户需要准备什么',text:'一份真实业务流程、脱敏的表格或订单样例、参与人员的角色，以及最希望减少的重复操作。不要在初次咨询中发送密码或客户敏感数据。'},
    {title:'范围与限制',text:'自动化不等于所有步骤无人处理。付款、审批和异常情况应保留必要的人工确认；外部系统是否能接入取决于其开放能力。'}]},
  {slug:'web-miniapp-development',title:'网站与微信小程序开发',summary:'从需求梳理到上线交付，为教育、装修和文旅等业务建设网站、小程序与管理功能。',related:['house-decoration','language-learning','scenic-guide'],sections:[
    {title:'适合哪些业务',text:'需要在线展示服务、收集客户需求、管理订单、提供学习或导览功能的企业。根据客户使用场景选择网站或微信小程序。'},
    {title:'可交付内容',text:'页面与交互设计、业务功能开发、必要的管理入口、测试及部署。首版功能、交付资料和验收条件在开发前约定。'},
    {title:'实施步骤',text:'梳理目标用户与核心操作 → 确认页面和功能范围 → 分阶段开发演示 → 测试验收 → 上线交付。'},
    {title:'客户需要准备什么',text:'产品或服务介绍、品牌素材、参考流程，以及域名和平台账号的管理安排。小程序发布需要满足平台的主体认证及审核要求。'},
    {title:'范围与限制',text:'不承诺平台审核通过时间，也不将所有想法一次塞进首版。支付、定位等能力需结合平台权限和业务条件确认。'}]},
  {slug:'ai-application-development',title:'AI 应用与内容工作流开发',summary:'把语音、图片、视频生成及信息整理能力接入实际业务，先验证关键步骤，再开发可使用的工具。',related:['scenic-guide'],sections:[
    {title:'适合哪些业务',text:'需要处理重复内容工作、整理信息或给用户提供 AI 辅助功能的团队。先确定输入、预期结果以及人工检查方式。'},
    {title:'可交付内容',text:'模型接口接入、输入与结果管理、任务流程、失败提示和必要的人工确认。可结合网站或小程序提供使用入口。'},
    {title:'实施步骤',text:'明确任务与质量标准 → 用代表性样例验证 → 确定接口与成本边界 → 开发测试 → 上线观察并优化。'},
    {title:'客户需要准备什么',text:'脱敏输入样例、合格结果示例、不应出现的结果，以及使用频率和预算范围。'},
    {title:'范围与限制',text:'模型结果存在不确定性，外部接口也有费用、速率和可用性限制。不能保证每次输出完全一致，重要结果需要人工复核。'}]},
];
export const questions: Section[] = [
 {title:'需求还不完整，可以开始沟通吗？',text:'可以先描述现有工作、使用者和最想解决的问题，再一起把需求拆成可验证的首版范围。'},
 {title:'可以接入已有系统吗？',text:'先检查系统接口、授权、数据格式和运行环境；完成评估后确认可接入的功能，不预先承诺所有系统都能打通。'},
 {title:'如何确定首版范围？',text:'优先选择能完成一条核心业务流程的功能，同时约定输入、输出、异常处理和验收方式。'},
 {title:'上线后如何维护？',text:'沟通时明确运行环境、账号归属、交付资料以及后续修复和功能迭代的安排，维护范围单独约定。'},
];
const details: Record<string,Section[]> = {
 'house-decoration':[{title:'业务背景',text:'装修业务通过微信群宣传并收集需求，需要把客户选择商品到下单的过程整理到小程序中。'},{title:'已实现功能',text:'商品浏览、购物车、订单和用户页面。下方截图展示现有项目界面，不代表收入或效率提升数据。'}],
 'language-learning':[{title:'业务背景',text:'为方竹小语种培训提供学习小程序，让学员能够在移动端使用单词书并记录学习。'},{title:'已实现功能',text:'单词书、日历打卡、用户中心与兑换码等功能。项目展示聚焦已实现的功能，不以截图推断学习效果。'}],
 'scenic-guide':[{title:'业务背景',text:'面向景区游客的小程序，将景点信息和导览入口集中到移动端。'},{title:'已实现功能',text:'地图标注、GPS 定位、路线规划、景点语音导览，以及 AI 交互引导浏览。实际使用依赖定位授权、网络和相关服务。'}],
};
export const cases = projects2B.filter(p=>p.id in details).map(p=>({slug:p.id,title:p.title,summary:p.description,images:p.galleryImages,sections:[...details[p.id],{title:'交付职责',text:'从业务需求梳理、页面与使用流程设计，到开发、测试和部署上线，负责完整软件交付。'}],related:services.filter(s=>s.related.includes(p.id)).map(s=>s.slug)}));
