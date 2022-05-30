import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { store } from '@/store/index'
import { ITheme } from '@/business'

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
  public spacing: Record<number, string> = {}

  @Mutation
  public setState<T extends GlobalStore>(payload: Partial<T>) {
    for (const key in payload) {
      Object.assign(this, { [key]: payload[key] })
    }
  }
}
export default getModule(GlobalStore)
