import { createSSRApp, h } from "vue";

export function createApp(context) {
  return createSSRApp({
    render: _ => h(context.Page, context.props)
  });
}
