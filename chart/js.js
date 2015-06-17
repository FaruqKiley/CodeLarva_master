  // JavaScript Document	
  var chart = c3.generate({
		  bindto: '#chart',
		  data: {
			columns: [
			  ['Year1', 30, 200, 100, 400, 150, 250],
			  ['Year2', 50, 20, 10, 40, 15, 25]
			]
		  }
	  });
	  
	  var chart1 = c3.generate({
	  bindto: '#chart1',
	  data: {
		columns: [
		  ['Loss1', 30, 200, 100, 400, 150, 250],
		  ['Losss2', 50, 20, 10, 40, 15, 25]
		],
		axes: {
		  data2: 'y2'
		},
		types: {
		  data2: 'bar' // ADD
		}
	  },
	  axis: {
		y: {
		  label: {
			text: 'Y Label',
			position: 'outer-middle'
		  }
		},
		y2: {
		  show: true,
		  label: {
			text: 'Y2 Label',
			position: 'outer-middle'
		  }
		}
	  }
  });
  
  var chart2 = c3.generate({
	 bindto: '#chart2',
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'step',
            data2: 'area-step'
        }
    }
});
