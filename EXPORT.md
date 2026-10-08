# 回归游乐场：源代码导出

这是已发布版本的可编辑源代码快照，保留原界面、交互、教学内容、组件和资源。

## 本地运行

需要 Node.js >=22.13.0，以及 package.json 指定的 pnpm 11.25.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

开发服务默认使用 http://localhost:5173 。构建命令为 `pnpm build`，构建后的本地预览为 `pnpm start`。
原始框架文档保留在 README.md。项目使用 React、Vinext/Vite 与 Cloudflare Worker 构建链，并非可直接交给 GitHub Pages 的静态成品。

## 导出范围与隐私

- 应用源码、依赖清单与锁文件、样式、SVG 资源和原始 README 均已保留。
- 未包含 Git 历史、凭证、运行时环境变量、安装依赖、构建产物或课程原始 PDF。
- `.openai/hosting.json` 保留本地构建所需的空资源声明，移除了原网站的项目绑定标识。
- 移除了可重新生成的 TypeScript 构建缓存 `tsconfig.tsbuildinfo`。
- 这是源码导出，不改变原网站的内容、发布状态或访问权限。
- 本次导出未重新安装依赖或执行构建；目标环境首次运行时需安装依赖并验证。
- 导出本身未添加开源许可证；第三方组件的现有许可证保持不变。
