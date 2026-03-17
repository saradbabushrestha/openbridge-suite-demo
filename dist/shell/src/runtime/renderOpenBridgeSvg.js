import * as React from "react";
function esc(v) {
    return String(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
function prefixIds(svg, prefix) {
    let out = svg.replace(/id="([^"]+)"/g, (_m, id) => `id="${prefix}${id}"`);
    out = out.replace(/url\(#([^\)]+)\)/g, (_m, id) => `url(#${prefix}${id})`);
    out = out.replace(/(href|xlink:href)="#([^"]+)"/g, (_m, attr, id) => `${attr}="#${prefix}${id}"`);
    out = out.replace(/(aria-labelledby|aria-describedby)="([^"]+)"/g, (_m, attr, ids) => `${attr}="${ids.split(/\s+/).map((id) => `${prefix}${id}`).join(' ')}"`);
    return out;
}
function inject(svg, preserveAspectRatio, title) {
    return svg.replace(/<svg([^>]*)>/, (_m, attrs) => {
        const label = title ? ` role="img" aria-label="${esc(title)}"` : ' aria-hidden="true"';
        const titleMarkup = title ? `<title>${esc(title)}</title>` : '';
        return `<svg${attrs} preserveAspectRatio="${preserveAspectRatio}" focusable="false"${label} style="display:block;width:100%;height:100%;overflow:visible">${titleMarkup}`;
    });
}
export function renderOpenBridgeSvg(svgMarkup, props) {
    const { size, width, height, responsive, title, preserveAspectRatio = "xMidYMid meet", intrinsicWidth = 24, intrinsicHeight = 24, style, className, ref, ...rest } = props;
    const rid = React.useId().replace(/[:]/g, "");
    const markup = React.useMemo(() => inject(prefixIds(svgMarkup, `${rid}-`), preserveAspectRatio, title), [svgMarkup, rid, preserveAspectRatio, title]);
    const resolvedWidth = width ?? size ?? (responsive ? "100%" : intrinsicWidth);
    const resolvedHeight = height ?? size ?? (responsive ? "auto" : intrinsicHeight);
    const mergedStyle = {
        display: "inline-block",
        lineHeight: 0,
        width: resolvedWidth,
        height: resolvedHeight,
        maxWidth: responsive ? "100%" : undefined,
        aspectRatio: `${intrinsicWidth} / ${intrinsicHeight}`,
        verticalAlign: "middle",
        ...style,
    };
    return React.createElement("span", {
        ...rest,
        ref,
        className,
        title: rest.title ?? title,
        style: mergedStyle,
        dangerouslySetInnerHTML: { __html: markup },
    });
}
