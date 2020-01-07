class CompletionListener {
    constructor (onComplete) {
        return this._onComplete = onComplete;
    }

    onComplete (success) {
        return this._onComplete(success);
    }
}


export { CompletionListener };