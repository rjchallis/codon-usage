
function plot_usage(base_count,codon_count){

var nt = [
  { codon: 'CUU', first: 'C', second: 'U', third: 'U', aa: 'Leucine' }, 
  { codon: 'CUC', first: 'C', second: 'U', third: 'C', aa: 'Leucine' }, 
  { codon: 'CUA', first: 'C', second: 'U', third: 'A', aa: 'Leucine' },
  { codon: 'CUG', first: 'C', second: 'U', third: 'G', aa: 'Leucine' },
  
  { codon: 'UUU', first: 'U', second: 'U', third: 'U', aa: 'Leucine' }, 
  { codon: 'UUC', first: 'U', second: 'U', third: 'C', aa: 'Leucine' }, 
  { codon: 'UUA', first: 'U', second: 'U', third: 'A', aa: 'Phenylalanine' },
  { codon: 'UUG', first: 'U', second: 'U', third: 'G', aa: 'Phenylalanine' },
  { codon: 'UAU', first: 'U', second: 'A', third: 'U', aa: 'Tyrosine' }, 
  { codon: 'UAC', first: 'U', second: 'A', third: 'C', aa: 'Tyrosine' }, 
  { codon: 'UAA', first: 'U', second: 'A', third: 'A', aa: 'Stop' },
  { codon: 'UAG', first: 'U', second: 'A', third: 'G', aa: 'Stop' }, 
  { codon: 'UGA', first: 'U', second: 'G', third: 'A', aa: 'Stop' },
  { codon: 'UGU', first: 'U', second: 'G', third: 'U', aa: 'Cysteine' }, 
  { codon: 'UGC', first: 'U', second: 'G', third: 'C', aa: 'Cysteine' },
  { codon: 'UGG', first: 'U', second: 'G', third: 'G', aa: 'Tryptophan' },
  { codon: 'UCU', first: 'U', second: 'C', third: 'U', aa: 'Serine' }, 
  { codon: 'UCC', first: 'U', second: 'C', third: 'C', aa: 'Serine' }, 
  { codon: 'UCA', first: 'U', second: 'C', third: 'A', aa: 'Serine' },
  { codon: 'UCG', first: 'U', second: 'C', third: 'G', aa: 'Serine' },
  
  { codon: 'AGU', first: 'A', second: 'G', third: 'U', aa: 'Serine' }, 
  { codon: 'AGC', first: 'A', second: 'G', third: 'C', aa: 'Serine' }, 
  { codon: 'AGA', first: 'A', second: 'G', third: 'A', aa: 'Arginine' },
  { codon: 'AGG', first: 'A', second: 'G', third: 'G', aa: 'Arginine' },
  
  { codon: 'CGU', first: 'C', second: 'G', third: 'U', aa: 'Arginine' }, 
  { codon: 'CGC', first: 'C', second: 'G', third: 'C', aa: 'Arginine' }, 
  { codon: 'CGA', first: 'C', second: 'G', third: 'A', aa: 'Arginine' },
  { codon: 'CGG', first: 'C', second: 'G', third: 'G', aa: 'Arginine' },
  { codon: 'CCU', first: 'C', second: 'C', third: 'U', aa: 'Proline' }, 
  { codon: 'CCC', first: 'C', second: 'C', third: 'C', aa: 'Proline' }, 
  { codon: 'CCA', first: 'C', second: 'C', third: 'A', aa: 'Proline' },
  { codon: 'CCG', first: 'C', second: 'C', third: 'G', aa: 'Proline' },
  { codon: 'CAU', first: 'C', second: 'A', third: 'U', aa: 'Histidine' }, 
  { codon: 'CAC', first: 'C', second: 'A', third: 'C', aa: 'Histidine' }, 
  { codon: 'CAA', first: 'C', second: 'A', third: 'A', aa: 'Glutamine' },
  { codon: 'CAG', first: 'C', second: 'A', third: 'G', aa: 'Glutamine' },
  
  { codon: 'AUU', first: 'A', second: 'U', third: 'U', aa: 'Isoleucine' }, 
  { codon: 'AUC', first: 'A', second: 'U', third: 'C', aa: 'Isoleucine' }, 
  { codon: 'AUA', first: 'A', second: 'U', third: 'A', aa: 'Isoleucine' },
  { codon: 'AUG', first: 'A', second: 'U', third: 'G', aa: 'Methionine' },
  { codon: 'ACU', first: 'A', second: 'C', third: 'U', aa: 'Threonine' }, 
  { codon: 'ACC', first: 'A', second: 'C', third: 'C', aa: 'Threonine' }, 
  { codon: 'ACA', first: 'A', second: 'C', third: 'A', aa: 'Threonine' },
  { codon: 'ACG', first: 'A', second: 'C', third: 'G', aa: 'Threonine' },
  { codon: 'AAU', first: 'A', second: 'A', third: 'U', aa: 'Aspargine' }, 
  { codon: 'AAC', first: 'A', second: 'A', third: 'C', aa: 'Aspargine' }, 
  { codon: 'AAA', first: 'A', second: 'A', third: 'A', aa: 'Lysine' },
  { codon: 'AAG', first: 'A', second: 'A', third: 'G', aa: 'Lysine' },
  
  { codon: 'GUU', first: 'G', second: 'U', third: 'U', aa: 'Valine' }, 
  { codon: 'GUC', first: 'G', second: 'U', third: 'C', aa: 'Valine' }, 
  { codon: 'GUA', first: 'G', second: 'U', third: 'A', aa: 'Valine' },
  { codon: 'GUG', first: 'G', second: 'U', third: 'G', aa: 'Valine' },
  { codon: 'GCU', first: 'G', second: 'C', third: 'U', aa: 'Alanine' }, 
  { codon: 'GCC', first: 'G', second: 'C', third: 'C', aa: 'Alanine' }, 
  { codon: 'GCA', first: 'G', second: 'C', third: 'A', aa: 'Alanine' },
  { codon: 'CGC', first: 'G', second: 'C', third: 'G', aa: 'Alanine' },
  { codon: 'GAU', first: 'G', second: 'A', third: 'U', aa: 'Aspartic_acid' }, 
  { codon: 'GAC', first: 'G', second: 'A', third: 'C', aa: 'Aspartic_acid' }, 
  { codon: 'GAA', first: 'G', second: 'A', third: 'A', aa: 'Glutamic_acid' },
  { codon: 'GAG', first: 'G', second: 'A', third: 'G', aa: 'Glutamic_acid' },
  { codon: 'GGU', first: 'G', second: 'G', third: 'U', aa: 'Glycine' }, 
  { codon: 'GGC', first: 'G', second: 'G', third: 'C', aa: 'Glycine' }, 
  { codon: 'GGA', first: 'G', second: 'G', third: 'A', aa: 'Glycine' },
  { codon: 'GGG', first: 'G', second: 'G', third: 'G', aa: 'Glycine' }
];



var aa = {
  	Leucine: 'nonpolar',
  	Phenylalanine: 'nonpolar',
  	Tyrosine: 'polar',
  	Stop: 'stop',
  	Cysteine: 'polar',
  	Tryptophan: 'nonpolar',
  	Serine: 'polar',
  	Arginine: 'basic',
  	Proline: 'nonpolar',
  	Histidine: 'basic',
  	Glutamine: 'polar',
  	Isoleucine: 'nonpolar',
  	Methionine: 'nonpolar',
  	Threonine: 'polar',
  	Aspargine: 'polar',
  	Lysine: 'nonpolar',
  	Valine: 'nonpolar',
  	Alanine: 'nonpolar',
  	Aspartic_acid: 'acidic',
  	Glutamic_acid: 'acidic',
  	Glycine: 'polar'
  };

var amino_acids = [
  { label: 'Leucine', count: 6 },
  { label: 'Phenylalanine', count: 2 }, 
  { label: 'Tyrosine', count: 2 },
  { label: 'Stop', count: 3 }, 
  { label: 'Cysteine', count: 2 },
  { label: 'Tryptophan', count: 1 },
  { label: 'Serine', count: 6 },
  { label: 'Arginine', count: 6 },
  { label: 'Proline', count: 4 }, 
  { label: 'Histidine', count: 2 },
  { label: 'Glutamine', count: 2 },
  { label: 'Isoleucine', count: 3 }, 
  { label: 'Methionine', count: 1 },
  { label: 'Threonine', count: 4 },
  { label: 'Aspargine', count: 2 },
  { label: 'Lysine', count: 2 },
  { label: 'Valine', count: 4 },
  { label: 'Alanine', count: 4 }, 
  { label: 'Aspartic acid', count: 2 },
  { label: 'Glutamic acid', count: 2 },
  { label: 'Glycine', count: 4 }
];

var color = {
	U: '#E6E600',
	C: '#E00000',
	A: '#5050FF',
	G: '#00C000',
	nonpolar: '#fdbf6f', 
	polar: '#b2df8a',
	stop: '#666666',
	basic: '#cab2d6',
	acidic: '#fb9a99'
  }; 

color = {
	U: '#E6E600',
	C: '#E00000',
	A: '#5050FF',
	G: '#00C000',
	nonpolar: '#fdbf6f', 
	polar: '#b2df8a',
	stop: '#cccccc',
	basic: '#cab2d6',
	acidic: '#fb9a99',
	exp_nonpolar: '#ff7f00', 
	exp_polar: '#33a02c',
	exp_stop: '#666666',
	exp_basic: '#6A3d9a',
	exp_acidic: '#e31a1c'
  }; 

/*color = {
	U: '#ff7f00',
	C: '#e31a1c',
	A: '#1f78b4',
	G: '#33a02c',
	nonpolar: '#ff7f00', 
	polar: '#33a02c',
	stop: '#666666',
	basic: '#6A3d9a',
	acidic: '#e31a1c'
  }; */


function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

var n_bases = sum(base_count);
var n_codons = sum(codon_count);

var freq = {};
for( var base in base_count ) {
  if( base_count.hasOwnProperty( base ) ) {
      freq[base] = base_count[base]/n_bases * 100;
  }
}
var arr = Object.keys( freq ).map(function ( key ) { return freq[key]; });
var min = Math.min.apply( null, arr );
var max = Math.max.apply( null, arr );

for( var codon in codon_count ) {
  if( codon_count.hasOwnProperty( codon ) ) {
      freq[codon] = codon_count[codon]/n_codons * 100;
  }
}
for (var i = 0; i < nt.length; i++){
  freq[nt[i].aa] = freq[nt[i].aa] ? freq[nt[i].aa] + freq[nt[i].codon] : freq[nt[i].codon];
}



var exp_freq = {}; 
var aa_exp_freqs = {};
var total_exp_freq = 0;
for (var i = 0; i < nt.length; i++){
  var tmp = freq[nt[i].first]/100 * freq[nt[i].second]/100 * freq[nt[i].third]/100;
  total_exp_freq += tmp;
  aa_exp_freqs[nt[i].aa] = aa_exp_freqs[nt[i].aa] ? aa_exp_freqs[nt[i].aa] + tmp : tmp;
}
for (var key in aa_exp_freqs) {
  if (aa_exp_freqs.hasOwnProperty(key)) {
    exp_freq[key] = aa_exp_freqs[key] / total_exp_freq * 100;
  }
}

var width = 900;
var height = 900;
var radius = [Math.min(width, height) / 2];
var radunit = (radius/8)/max;
radunit = radius / 300;
var pie = d3.layout.pie()
  .value(function(d) { return d.count; })
  .sort(null); 

draw_codon = function (svg,angle,data){
  var g = svg.append('g')
    .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');
  var radians = [angle * (Math.PI/180),(angle+360/64) * (Math.PI/180)];
  
  var amino = d3.svg.arc()
    .innerRadius(3*radius/4.9)
    .outerRadius(3*radius/4.9+freq[data.aa]*radunit*10)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', amino)
    .attr('stroke', color[aa[data.aa]])
    .attr('fill', color[aa[data.aa]])
    .attr("class","aa_obs");
  
  for (var t = 1; t < 25; t+=1){
  	var tick = d3.svg.arc()
    .innerRadius(3*radius/4.9+t*radunit*10)
    .outerRadius(3*radius/4.9+t*radunit*10)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', tick)
    .attr('stroke', 'white')
    .attr('fill', 'none')
    .attr("class","aa_scale");
  }
  
  var gc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(freq[data.first]*radunit)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', gc)
    .attr('stroke', color[data.first])
    .attr('stroke-width', '2px')
    .attr('fill', color[data.first])
    .attr("class","gc_inner");
  
  // nt letters
  g.append('text')
    .attr('x', -radius/30 + 'px')
    .attr('y', -radius/30 + 'px')
    .text('G')
    .attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	.style("font", "14px Helvetica")
    .attr('fill', 'white')
    .attr("class","gc_letter");
  g.append('text')
    .attr('x', radius/60 + 'px')
    .attr('y', radius/20 + 'px')
    .text('C')
    .attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	.style("font", "14px Helvetica")
    .attr('fill', 'white')
    .attr("class","gc_letter");
  g.append('text')
    .attr('x', -radius/25 + 'px')
    .attr('y', radius/30 + 'px')
    .text('A')
    .attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	.style("font", "14px Helvetica")
    .attr('fill', 'white')
    .attr("class","gc_letter");
  g.append('text')
    .attr('x', radius/25 + 'px')
    .attr('y', -radius/50 + 'px')
    .text('T')
    .attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	.style("font", "14px Helvetica")
    .attr('fill', 'white')
    .attr("class","gc_letter");
    
  var fst = d3.svg.arc()
    .innerRadius(3*radius/5 - 18)
    .outerRadius(3*radius/5 - 14)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', fst)
    .attr('stroke', color[data.first])
    .attr('stroke-width', '2px')
    .attr('fill', color[data.first])
    .attr("class","codon_pos first");
  
  var snd = d3.svg.arc()
    .innerRadius(3*radius/5 - 12)
    .outerRadius(3*radius/5 - 8)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', snd)
    .attr('stroke', color[data.second])
    .attr('stroke-width', '2px')
    .attr('fill', color[data.second])
    .attr("class","codon_pos second");
  
  var trd = d3.svg.arc()
    .innerRadius(3*radius/5 - 6)
    .outerRadius(3*radius/5 - 2)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', trd)
    .attr('stroke', color[data.third])
    .attr('stroke-width', '2px')
    .attr('fill', color[data.third])
    .attr("class","codon_pos third");

  var exp_amino = d3.svg.arc()
    .innerRadius(3*radius/4.9+exp_freq[data.aa]*radunit*10-radunit)
    .outerRadius(3*radius/4.9+exp_freq[data.aa]*radunit*10)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', exp_amino)
    .attr('stroke', color['exp_'+aa[data.aa]])
    .attr('stroke-width', '2px')
    .attr('fill', color['exp_'+aa[data.aa]])
    .attr("class","aa_exp");
    
   var cdn = d3.svg.arc()
    .innerRadius((max+2)*radunit)
    .outerRadius((max+2)*radunit+freq[data.codon]*32*radunit)
    .startAngle(radians[0])
    .endAngle(radians[1]);
    g.append('g').attr("class","codon_obs")
  	.append('path')
    .attr('d', cdn)
    .attr('stroke', 'none')
    .style('opacity', '0.5')
    .attr('fill', '#333333');
 
 var exp = d3.svg.arc()
    .innerRadius((max+2)*radunit+freq[data.first]*freq[data.second]*freq[data.third]/300*radunit-radunit)
    .outerRadius((max+2)*radunit+freq[data.first]*freq[data.second]*freq[data.third]/300*radunit)
    .startAngle(radians[0])
    .endAngle(radians[1]);
  g.append('path')
    .attr('d', exp)
    .attr('stroke', '#666666')
    .attr('stroke-width', '2px')
    .attr('fill', '#666666')
    .attr("class","codon_exp");

    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
  for (var i = 0; i < 64; i++){
	draw_codon(svg,i*360/64,nt[i]);
  }

  var g = svg.append('g')
    .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');
  var arc = d3.svg.arc()
    .innerRadius(radunit * (max+1))
    .outerRadius(radius*1.5);
  var grp = g.selectAll('g')
  	.data(pie(amino_acids))
    .enter().append('g')
  grp.append('path')
    .attr('d', arc)
    .attr('stroke', 'white')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')
    .attr("class","pie_lines");
  grp.append("text")
    //rotate
    .attr("class","aa_names")
    .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        //d.outerRadius = radius; // Set Outer Coordinate
       // d.innerRadius = 3*radius/4.8; // Set Inner Coordinate
       console.log(d.endAngle);
        return "rotate(" + ((d.endAngle * 180/Math.PI) - 90) + ")";
      })
    //.append("text")
	.attr("dy", "-0.25em")
	.attr("dx", 3*radius/5-22+"px")
	.attr("text-anchor", "end")
	.style("font", "bold 14px Helvetica")
	.text(function(d) {
		console.log(d.data.label);
	  return d.data.label;
	})
    d3.select("body")
    	.on("keydown", function() {
    		d3.selectAll('.aa_obs').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.pie_lines').transition().delay(0).duration(1000).attr('stroke','#cccccc');
    		d3.selectAll('.aa_scale').transition().delay(0).duration(1000).attr('stroke','#cccccc');
    		d3.select('body').transition().delay(0).duration(1000).style('background-color','#cccccc');
    		d3.selectAll('.aa_names').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.codon_pos').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.codon_obs').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.codon_exp').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.aa_exp').transition().delay(0).duration(1000).style('opacity',0.1);
    		d3.selectAll('.gc_letter').transition().delay(500).duration(2000).style('opacity',1);
    	d3.select("body")
    	.on("keydown", function() {
    		d3.selectAll('.aa_names').transition().delay(0).duration(1000).style('opacity',1);
    		d3.select("body")
    			.on("keydown", function() {
    				d3.selectAll('.codon_pos').transition().delay(0).duration(1000).style('opacity',1);
    				d3.select("body")
    					.on("keydown", function() {
    						d3.selectAll('.codon_obs').transition().delay(0).duration(1000).style('opacity',1);
    						d3.select("body")
    							.on("keydown", function() {
    								d3.selectAll('.codon_exp').transition().delay(0).duration(1000).style('opacity',1);
    								d3.select("body")
    									.on("keydown", function() {
    										d3.selectAll('.aa_exp').transition().delay(0).duration(1000).style('opacity',1);
    										d3.select("body")
    											.on("keydown", function() {
    												d3.selectAll('.aa_obs').transition().delay(0).duration(1000).style('opacity',1);
    												d3.selectAll('.pie_lines').transition().delay(0).duration(1000).attr('stroke','#ffffff');
    										d3.selectAll('.aa_scale').transition().delay(0).duration(1000).attr('stroke','#ffffff');
    										d3.select('body').transition().delay(0).duration(1000).style('background-color','#ffffff');
    										
    												d3.select("body")
    													.on("keydown", function() {
    														d3.selectAll('.gc_letter').transition().delay(0).duration(1000).style('opacity',0);
    													});
    											});
    									});
    							});
    					});
    			});
    	});
    });
}

