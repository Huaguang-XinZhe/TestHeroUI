const IMPORT_REGEX = /import\s+.*\s+from\s+['"](@\/|..\/)(.*)['"];/g;
const IMPORT_PATH_MATCH_REGEX = /^\S*import(?:\s+[\w*\s{},]+from\s+)?\s*['"](.+)['"];?/gm;


export {IMPORT_PATH_MATCH_REGEX, IMPORT_REGEX};

