Tempo component:

    <Tempo title="Unleash Tempo">
      <Graph data={
        [{tempo: 1},
        {tempo: 2},
        {tempo: 3},
        {tempo: 2},
        {tempo: 3},
        {tempo: 4},
        {tempo: 4},
        {tempo: 5},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 1},
        {tempo: 6}]
        } />
      <TempoLegend>
        <TempoLegendItem label="Paths" value={20} />
        <TempoLegendItem label="Open Steps" value={130} />
        <TempoLegendItem label="Finished Steps" value={100} />
      </TempoLegend>
    </Tempo>
