import request from 'request'
import Enum from './enum'
import Region from './region'

export default class Spider {
  region: Region;

  constructor() {
    this.region = Region.Europe
  }

  hostBaseName(): string {
    switch (this.region) {
      case Region.US:
        return "https://us.api.battle.net/"
      case Region.Europe:
        return "https://eu.api.battle.net/"
      case Region.Korea:
        return "https://kr.api.battle.net/"
      case Region.Taiwan:
        return "https://tw.api.battle.net/"
      case Region.China:
        return "https://api.battlenet.com.cn/"
      case Region.SouthEastAsia:
        return "https://sea.api.battle.net/"
    }
  }

  regionLocales(): [string] {
    switch (this.region) {
      case Region.US:
        return ["en_US", "es_MX", "pt_BR"]
      case Region.Europe:
        return ["en_GB", "es_ES", "fr_FR", "ru_RU", "de_DE", "pt_PT", "it_IT"]
      case Region.Korea:
        return ["ko_KR"]
      case Region.Taiwan:
        return ["zh_TW"]
      case Region.China:
        return ["zh_CN"]
      case Region.SouthEastAsia:
        return ["en_US"]
    }
  }
}