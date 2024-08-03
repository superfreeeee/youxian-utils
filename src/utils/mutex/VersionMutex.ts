import { IMutex, IsExpired } from './base';

export class VersionMutex implements IMutex {
  private _version = 0;

  next(): IsExpired {
    this._version += 1;
    const version = this._version;
    /**
     * Expired when version is not the newest one
     */
    return () => version < this._version;
  }
}
