import { getMessage } from '../../ui/helper/utils/i18n-helper';
import * as en from '../../app/_locales/en/messages.json';

export function tEn(key) {
  return getMessage('en', en, key);
}
