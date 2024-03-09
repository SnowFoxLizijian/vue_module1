import echartsUse, {echartsOption} from '@/use/echarts'
import * as echarts from "echarts/core"

type echartsReturn = ReturnType<{
  options: echartsOption,
  echarts: keyof echarts
}>

const useEcharts = ():echartsReturn => {
  const echarts = echartsUse()
  let options:echartsOption = {}
  return {
    echarts,
    options
  }
}

export default useEcharts
