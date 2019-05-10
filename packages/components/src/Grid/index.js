// Libraries
import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid as VirtualizedGrid,
  ScrollSync,
} from 'react-virtualized';
import _ from 'lodash';

// Assets
import 'react-virtualized/styles.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultWidth: 100,
      fixedHeight: true,
    });
  }

  render() {
    const {height, headerHeight, rowHeight, columns, rows, children} = this.props;

    return (
      <ScrollSync>
        {({
          clientHeight,
          clientWidth,
          onScroll,
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth,
        }) => (
          <AutoSizer disableHeight>
            {({width}) => (
              <div>
                <VirtualizedGrid
                  columnCount={columns.length}
                  columnWidth={this.cache.columnWidth}
                  height={headerHeight || rowHeight}
                  rowHeight={headerHeight || rowHeight}
                  rowCount={1}
                  overscanColumnCount={0}
                  scrollLeft={scrollLeft}
                  width={width}
                  deferredMeasurementCache={this.cache}
                  cellRenderer={({key, columnIndex, rowIndex, parent, style}) => (
                    <CellMeasurer
                      key={key}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      cache={this.cache}
                      parent={parent}>
                      <div style={style}>
                        {children({
                          header: true,
                          columnIndex,
                          item: _.get(columns, columnIndex),
                        })}
                      </div>
                    </CellMeasurer>
                  )}
                  style={{
                    // NOTE(mark): Must specify these separately because of how
                    // they are merged in.
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                  }}
                />
                <VirtualizedGrid
                  columnCount={columns.length}
                  columnWidth={this.cache.columnWidth}
                  height={height}
                  rowCount={rows.length}
                  rowHeight={rowHeight}
                  width={width}
                  overscanColumnCount={0}
                  overscanRowCount={2}
                  deferredMeasurementCache={this.cache}
                  onScroll={onScroll}
                  cellRenderer={({key, columnIndex, rowIndex, parent, style}) => (
                    <CellMeasurer
                      key={key}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      cache={this.cache}
                      parent={parent}>
                      <div style={style}>
                        {children({
                          header: false,
                          columnIndex,
                          rowIndex,
                          item: _.get(rows, `${rowIndex}.${columnIndex}`),
                        })}
                      </div>
                    </CellMeasurer>
                  )}
                />
              </div>
            )}
          </AutoSizer>
        )}
      </ScrollSync>
    );
  }
}

export default Grid;
