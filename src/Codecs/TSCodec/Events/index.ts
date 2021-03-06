const Events = {
    ERROR: 'ERROR',
    GET_SEI_INFO: 'GET_SEI_INFO',

    FRAG_PARSED: 'FRAG_PARSED',

    INIT_PTS_FOUND: 'INIT_PTS_FOUND',

    FRAG_PARSING_INIT_SEGMENT: 'FRAG_PARSING_INIT_SEGMENT',

    FRAG_PARSING_METADATA: 'FRAG_PARSING_METADATA',

    FRAG_PARSING_USERDATA: 'FRAG_PARSING_USERDATA',

    MEDIA_INFO: 'MEDIA_INFO',
    // 当转码器解析出初始化片段时触发
    INIT_SEGMENT: 'INIT_SEGMENT',

    // 当转码器解析出媒体化片段时触发
    MEDIA_SEGMENT: 'MEDIA_SEGMENT',
    // 加载下一个 frag, 不对外
    LOAD_NEXT_FRAG: 'LOAD_NEXT_FRAG',

    META_DATA: 'META_DATA'
};

export default Events;
