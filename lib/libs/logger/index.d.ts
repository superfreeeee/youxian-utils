import debug from 'debug';
declare const Log: {
    info: debug.Debugger;
    warn: (msg: string, ...args: any[]) => void;
    error: (msg: string, ...args: any[]) => void;
};
export default Log;
