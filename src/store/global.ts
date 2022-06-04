import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { store } from '@/store/index'
import { ITheme, KV } from '@/business'

export enum Format {
  SLASH = '/',
  BAR = '-',
}

export enum RadiusFrom {
  AUTO = 'auto',
  MANUAL = 'manual',
}
@Module({ dynamic: true, store, name: 'global', namespaced: true })
class GlobalStore extends VuexModule {
  public theme: ITheme = {
    colors: [],
    borderRadius: [],
    boxShadow: [],
    fontFamily: [],
    fontSize: [],
    gradientColors: [],
  }
  // 边距
  public spacing: Record<number, string> = {}
  // token命名规则
  public tokenFormat = Format.SLASH
  // radiusFrom
  public radiusFrom = RadiusFrom.AUTO
  // 自定义边距规则
  public customRadius: KV[] = []
  @Mutation
  public setState<T extends GlobalStore>(payload: Partial<T>) {
    for (const key in payload) {
      Object.assign(this, { [key]: payload[key] })
    }
  }
}
export default getModule(GlobalStore)
