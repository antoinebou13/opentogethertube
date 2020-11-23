/* eslint-disable array-bracket-newline */

const mimeTypes = {
  "video/mp4": ["mp4", "mp4v", "mpg4"],
  "video/x-matroska": ["mkv", "mk3d", "mks"],
  "video/quicktime": ["mov", "qt"],
  "video/webm": ["webm"],
  "video/x-flv": ["flv"],
  "video/x-msvideo": ["avi"],
  "video/ogg": ["ogv"],
  "video/x-m4v": ["m4v"],
  "video/h264": ["h264"],
};

function getMimeType(extension) {
  for (const [mimeType, extensions] of Object.entries(mimeTypes)) {
    if (extensions.includes(extension)) {
      return mimeType;
    }
  }
}

function isSupportedMimeType(mimeType) {
  return !!/^video\/(?!x-flv)(?!x-matroska)(?!x-ms-wmv)(?!x-msvideo)[a-z0-9-]+$/.exec(mimeType);
}

module.exports = {
  getMimeType,
  isSupportedMimeType,
};
