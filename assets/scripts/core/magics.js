const base = (process.env.CONFIG_ASSET_URL || '').replace(/\/$/, '')

global.asset = function asset(pathname) {
  return base + pathname
}
