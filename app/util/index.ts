
export const getLanguageLabel = (code: string) :string => {
    switch (code) {
        case 'zh': return '简体中文';
        case 'en': return 'English';
        default: return 'xxx';
    }
}