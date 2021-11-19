import { App } from 'vue';
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus';
export default function styleImport(app: App) {
  [ElIcon, ElCard, ElLoading, ElButton].forEach(v => {
    app.use(v);
  });
  return app;
}