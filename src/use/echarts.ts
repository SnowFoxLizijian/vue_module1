import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  AriaComponent,
  AriaComponentOption,
  AxisPointerComponent,
  AxisPointerComponentOption,
  SingleAxisComponent,
  SingleAxisComponentOption,
  CalendarComponent,
  CalendarComponentOption,
  PolarComponent,
  PolarComponentOption,
  MarkLineComponent,
  MarkLineComponentOption,
  DataZoomComponent,
  DataZoomComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  GraphicComponent,
  GraphicComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  GeoComponent,
  GeoComponentOption

} from 'echarts/components';
import {
  ScatterChart,
  ScatterSeriesOption,
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
  PieChart,
  PieSeriesOption,
  MapChart,
  MapSeriesOption
} from 'echarts/charts';
import { UniversalTransition, LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';


export type echartsOption = echarts.ComposeOption<
  GridComponentOption |
  LineSeriesOption |
  TitleComponentOption|
  ToolboxComponentOption|
  TooltipComponentOption|
  LegendComponentOption|
  AriaComponentOption|
  AxisPointerComponentOption|
  SingleAxisComponentOption|
  CalendarComponentOption|
  BarSeriesOption|
  PolarComponentOption|
  MarkLineComponentOption|
  DataZoomComponentOption|
  DatasetComponentOption|
  GraphicComponentOption|
  PieSeriesOption|
  VisualMapComponentOption|
  ScatterSeriesOption|
  GeoComponentOption|
  MapSeriesOption
>

function echartsUse () {
  echarts.use([
    GeoComponent,
    MapChart,
    ScatterChart,
    VisualMapComponent,
    PieChart,
    GraphicComponent,
    DatasetComponent,
    DataZoomComponent,
    LegendComponent,
    TooltipComponent,
    ToolboxComponent,
    TitleComponent,
    GridComponent,
    MarkLineComponent,
    LineChart,
    BarChart,
    CanvasRenderer,
    AxisPointerComponent,
    SingleAxisComponent,
    CalendarComponent,
    PolarComponent,
    AriaComponent,
    LabelLayout,
    UniversalTransition,
  ]);
  return echarts
}
export default echartsUse
