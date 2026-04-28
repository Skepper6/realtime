const fs = require("fs");
const path = require("path");

const vendorStylesheets = [
  {
    source: ["node_modules", "react-range-slider-input", "dist", "style.css"],
    target: ["public", "assets", "css", "range-slider-input.css"],
  },
  {
    source: ["node_modules", "swiper", "swiper.css"],
    target: ["public", "assets", "css", "swiper.min.css"],
  },
  {
    source: ["node_modules", "swiper", "modules", "effect-coverflow.css"],
    target: ["public", "assets", "css", "swiper-effect-coverflow.css"],
  },
  {
    source: ["node_modules", "swiper", "modules", "effect-fade.css"],
    target: ["public", "assets", "css", "swiper-effect-fade.css"],
  },
  {
    source: ["node_modules", "swiper", "modules", "navigation.css"],
    target: ["public", "assets", "css", "swiper-navigation.css"],
  },
  {
    source: ["node_modules", "swiper", "modules", "pagination.css"],
    target: ["public", "assets", "css", "swiper-pagination.css"],
  },
  {
    source: ["node_modules", "swiper", "modules", "thumbs.css"],
    target: ["public", "assets", "css", "swiper-thumbs.css"],
  },
  {
    source: ["node_modules", "venobox", "dist", "venobox.min.css"],
    target: ["public", "assets", "css", "venobox.min.css"],
  },
];

function rewriteAssetUrls(content) {
  return content
    .replace(/\/\*# sourceMappingURL=.*?\*\//g, "")
    .replace(
      /url\((['"]?)(?:\.\.\/)+(?:fonts|webfonts)\//g,
      "url($1/fonts/"
    )
    .replace(/url\((['"]?)(?:\.\.\/)+images\//g, "url($1/images/");
}

function writeIfChanged(targetPath, nextContent) {
  if (fs.existsSync(targetPath)) {
    const currentContent = fs.readFileSync(targetPath, "utf8");

    if (currentContent === nextContent) {
      return;
    }
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, nextContent, "utf8");
}

function syncFile(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    return;
  }

  const nextContent = rewriteAssetUrls(fs.readFileSync(sourcePath, "utf8"));
  writeIfChanged(targetPath, nextContent);
}

function createDirectCssSyncManager(projectRoot = process.cwd()) {
  const sourceCssDir = path.join(projectRoot, "src", "app", "assets", "css");
  const publicCssDir = path.join(projectRoot, "public", "assets", "css");
  let debounceTimer = null;

  function syncDirectCssAssets() {
    if (fs.existsSync(sourceCssDir)) {
      const cssFiles = fs
        .readdirSync(sourceCssDir)
        .filter(fileName => fileName.endsWith(".css"));

      for (const fileName of cssFiles) {
        syncFile(
          path.join(sourceCssDir, fileName),
          path.join(publicCssDir, fileName)
        );
      }
    }

    for (const stylesheet of vendorStylesheets) {
      syncFile(
        path.join(projectRoot, ...stylesheet.source),
        path.join(projectRoot, ...stylesheet.target)
      );
    }
  }

  function scheduleSync(fileName) {
    if (fileName && !String(fileName).endsWith(".css")) {
      return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(syncDirectCssAssets, 100);
  }

  function watchDirectCssAssets() {
    const watchers = [
      fs.watch(sourceCssDir, (_eventType, fileName) => scheduleSync(fileName)),
    ];

    return () => {
      clearTimeout(debounceTimer);
      watchers.forEach(watcher => watcher.close());
    };
  }

  return {
    syncDirectCssAssets,
    watchDirectCssAssets,
  };
}

if (require.main === module) {
  createDirectCssSyncManager(process.cwd()).syncDirectCssAssets();
}

module.exports = {
  createDirectCssSyncManager,
};
