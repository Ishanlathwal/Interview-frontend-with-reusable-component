import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { layouts } from "./Components/LayoutOptions";
import Component from "./Components/ResuableComponent";
import {
  useCreateComponent1DataMutation,
  useCreateComponent2DataMutation,
  useCreateComponent3DataMutation,
  useGetcomponent1CountsQuery,
  useGetcomponent1DataQuery,
  useGetcomponent2CountsQuery,
  useGetcomponent2DataQuery,
  useGetcomponent3CountsQuery,
  useGetcomponent3DataQuery,
} from "./Rtk Query/RtkQuery";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const getComponent1DataQuery = useGetcomponent1DataQuery;
  const createComponent1DataMutation = useCreateComponent1DataMutation;
  const getComponent1CountsQuery = useGetcomponent1CountsQuery;
  const getComponent2DataQuery = useGetcomponent2DataQuery;
  const createComponent2DataMutation = useCreateComponent2DataMutation;
  const getComponent2CountsQuery = useGetcomponent2CountsQuery;
  const getComponent3DataQuery = useGetcomponent3DataQuery;
  const createComponent3DataMutation = useCreateComponent3DataMutation;
  const getComponent3CountsQuery = useGetcomponent3CountsQuery;
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
      margin={[10, 10]}
      rowHeight={30}
      isDraggable={false}
      width={1200}>
      <div key="a" className="component">
        <div className="content">
          <Component
            getDataQuery={getComponent1DataQuery}
            createDataMutation={createComponent1DataMutation}
            componentDataKey="component1"
            componentName="component1"
            updateDataHitCountKey="updateData1HitCount"
            createDataHitCountKey="createData1HitCount"
            getCountsQuery={getComponent1CountsQuery}
          />
        </div>
      </div>
      <div key="b" className="component">
        <div className="content">
          <Component
            getDataQuery={getComponent2DataQuery}
            createDataMutation={createComponent2DataMutation}
            componentDataKey="component2"
            componentName="component2"
            updateDataHitCountKey="updateData2HitCount"
            createDataHitCountKey="createData2HitCount"
            getCountsQuery={getComponent2CountsQuery}
          />
        </div>
      </div>
      <div key="c" className="component">
        <div className="content">
          <Component
            getDataQuery={getComponent3DataQuery}
            createDataMutation={createComponent3DataMutation}
            componentDataKey="component3"
            componentName="component3"
            updateDataHitCountKey="updateData3HitCount"
            createDataHitCountKey="createData3HitCount"
            getCountsQuery={getComponent3CountsQuery}
          />
        </div>
      </div>
    </ResponsiveGridLayout>
  );
}

export default App;
