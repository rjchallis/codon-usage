
var Codon_usage = function(stats){

this.nt = [
  { codon: 'UUU', first: 'U', second: 'U', third: 'U', x: 1, y: 8, aa: 'Leucine' },
  { codon: 'UUC', first: 'U', second: 'U', third: 'C', x: 2, y: 8, aa: 'Leucine' },
  { codon: 'UUA', first: 'U', second: 'U', third: 'A', x: 1, y: 7, aa: 'Phenylalanine' },
  { codon: 'UUG', first: 'U', second: 'U', third: 'G', x: 2, y: 7, aa: 'Phenylalanine' },
  { codon: 'UCU', first: 'U', second: 'C', third: 'U', x: 3, y: 8, aa: 'Serine' },
  { codon: 'UCC', first: 'U', second: 'C', third: 'C', x: 4, y: 8, aa: 'Serine' },
  { codon: 'UCA', first: 'U', second: 'C', third: 'A', x: 3, y: 7, aa: 'Serine' },
  { codon: 'UCG', first: 'U', second: 'C', third: 'G', x: 4, y: 7, aa: 'Serine' },
  { codon: 'UAU', first: 'U', second: 'A', third: 'U', x: 5, y: 8, aa: 'Tyrosine' },
  { codon: 'UAC', first: 'U', second: 'A', third: 'C', x: 6, y: 8, aa: 'Tyrosine' },
  { codon: 'UAA', first: 'U', second: 'A', third: 'A', x: 5, y: 7, aa: 'Stop' },
  { codon: 'UAG', first: 'U', second: 'A', third: 'G', x: 6, y: 7, aa: 'Stop' },
  { codon: 'UGU', first: 'U', second: 'G', third: 'U', x: 7, y: 8, aa: 'Cysteine' },
  { codon: 'UGC', first: 'U', second: 'G', third: 'C', x: 8, y: 8, aa: 'Cysteine' },
  { codon: 'UGA', first: 'U', second: 'G', third: 'A', x: 7, y: 7, aa: 'Stop' },
  { codon: 'UGG', first: 'U', second: 'G', third: 'G', x: 8, y: 7, aa: 'Tryptophan' },
  { codon: 'CUU', first: 'C', second: 'U', third: 'U', x: 1, y: 6, aa: 'Leucine' },
  { codon: 'CUC', first: 'C', second: 'U', third: 'C', x: 2, y: 6, aa: 'Leucine' },
  { codon: 'CUA', first: 'C', second: 'U', third: 'A', x: 1, y: 5, aa: 'Leucine' },
  { codon: 'CUG', first: 'C', second: 'U', third: 'G', x: 2, y: 5, aa: 'Leucine' },
  { codon: 'CCU', first: 'C', second: 'C', third: 'U', x: 3, y: 6, aa: 'Proline' },
  { codon: 'CCC', first: 'C', second: 'C', third: 'C', x: 4, y: 6, aa: 'Proline' },
  { codon: 'CCA', first: 'C', second: 'C', third: 'A', x: 3, y: 5, aa: 'Proline' },
  { codon: 'CCG', first: 'C', second: 'C', third: 'G', x: 4, y: 5, aa: 'Proline' },
  { codon: 'CAU', first: 'C', second: 'A', third: 'U', x: 5, y: 6, aa: 'Histidine' },
  { codon: 'CAC', first: 'C', second: 'A', third: 'C', x: 6, y: 6, aa: 'Histidine' },
  { codon: 'CAA', first: 'C', second: 'A', third: 'A', x: 5, y: 5, aa: 'Glutamine' },
  { codon: 'CAG', first: 'C', second: 'A', third: 'G', x: 6, y: 5, aa: 'Glutamine' },
  { codon: 'CGU', first: 'C', second: 'G', third: 'U', x: 7, y: 6, aa: 'Arginine' },
  { codon: 'CGC', first: 'C', second: 'G', third: 'C', x: 8, y: 6, aa: 'Arginine' },
  { codon: 'CGA', first: 'C', second: 'G', third: 'A', x: 7, y: 5, aa: 'Arginine' },
  { codon: 'CGG', first: 'C', second: 'G', third: 'G', x: 8, y: 5, aa: 'Arginine' },
  { codon: 'AUU', first: 'A', second: 'U', third: 'U', x: 1, y: 4, aa: 'Isoleucine' },
  { codon: 'AUC', first: 'A', second: 'U', third: 'C', x: 2, y: 4, aa: 'Isoleucine' },
  { codon: 'AUA', first: 'A', second: 'U', third: 'A', x: 1, y: 3, aa: 'Isoleucine' },
  { codon: 'AUG', first: 'A', second: 'U', third: 'G', x: 2, y: 3, aa: 'Methionine' },
  { codon: 'ACU', first: 'A', second: 'C', third: 'U', x: 3, y: 4, aa: 'Threonine' },
  { codon: 'ACC', first: 'A', second: 'C', third: 'C', x: 4, y: 4, aa: 'Threonine' },
  { codon: 'ACA', first: 'A', second: 'C', third: 'A', x: 3, y: 3, aa: 'Threonine' },
  { codon: 'ACG', first: 'A', second: 'C', third: 'G', x: 4, y: 3, aa: 'Threonine' },
  { codon: 'AAU', first: 'A', second: 'A', third: 'U', x: 5, y: 4, aa: 'Aspargine' },
  { codon: 'AAC', first: 'A', second: 'A', third: 'C', x: 6, y: 4, aa: 'Aspargine' },
  { codon: 'AAA', first: 'A', second: 'A', third: 'A', x: 5, y: 3, aa: 'Lysine' },
  { codon: 'AAG', first: 'A', second: 'A', third: 'G', x: 6, y: 3, aa: 'Lysine' },
  { codon: 'AGU', first: 'A', second: 'G', third: 'U', x: 7, y: 4, aa: 'Serine' },
  { codon: 'AGC', first: 'A', second: 'G', third: 'C', x: 8, y: 4, aa: 'Serine' },
  { codon: 'AGA', first: 'A', second: 'G', third: 'A', x: 7, y: 3, aa: 'Arginine' },
  { codon: 'AGG', first: 'A', second: 'G', third: 'G', x: 8, y: 3, aa: 'Arginine' },
  { codon: 'GUU', first: 'G', second: 'U', third: 'U', x: 1, y: 2, aa: 'Valine' },
  { codon: 'GUC', first: 'G', second: 'U', third: 'C', x: 2, y: 2, aa: 'Valine' },
  { codon: 'GUA', first: 'G', second: 'U', third: 'A', x: 1, y: 1, aa: 'Valine' },
  { codon: 'GUG', first: 'G', second: 'U', third: 'G', x: 2, y: 1, aa: 'Valine' },
  { codon: 'GCU', first: 'G', second: 'C', third: 'U', x: 3, y: 2, aa: 'Alanine' },
  { codon: 'GCC', first: 'G', second: 'C', third: 'C', x: 4, y: 2, aa: 'Alanine' },
  { codon: 'GCA', first: 'G', second: 'C', third: 'A', x: 3, y: 1, aa: 'Alanine' },
  { codon: 'GCG', first: 'G', second: 'C', third: 'G', x: 4, y: 1, aa: 'Alanine' },
  { codon: 'GAU', first: 'G', second: 'A', third: 'U', x: 5, y: 2, aa: 'Aspartic_acid' },
  { codon: 'GAC', first: 'G', second: 'A', third: 'C', x: 6, y: 2, aa: 'Aspartic_acid' },
  { codon: 'GAA', first: 'G', second: 'A', third: 'A', x: 5, y: 1, aa: 'Glutamic_acid' },
  { codon: 'GAG', first: 'G', second: 'A', third: 'G', x: 6, y: 1, aa: 'Glutamic_acid' },
  { codon: 'GGU', first: 'G', second: 'G', third: 'U', x: 7, y: 2, aa: 'Glycine' },
  { codon: 'GGC', first: 'G', second: 'G', third: 'C', x: 8, y: 2, aa: 'Glycine' },
  { codon: 'GGA', first: 'G', second: 'G', third: 'A', x: 7, y: 1, aa: 'Glycine' },
  { codon: 'GGG', first: 'G', second: 'G', third: 'G', x: 8, y: 1, aa: 'Glycine' }
];

this.properties = {
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

this.letter = {
  	Leucine: 'L',
  	Phenylalanine: 'F',
  	Tyrosine: 'Y',
  	Stop: '*',
  	Cysteine: 'C',
  	Tryptophan: 'W',
  	Serine: 'S',
  	Arginine: 'R',
  	Proline: 'P',
  	Histidine: 'H',
  	Glutamine: 'Q',
  	Isoleucine: 'I',
  	Methionine: 'M',
  	Threonine: 'T',
  	Aspargine: 'N',
  	Lysine: 'K',
  	Alanine: 'A',
  	Aspartic_acid: 'D',
  	Glutamic_acid: 'E',
  	Glycine: 'G'
  };

this.amino_acids = [
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

this.color = {
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

  this.Scaffolds = stats.Scaffolds;
  this.Genes = stats.Genes;
  this.Transcripts = stats.Transcripts;
  this.CDS = stats.CDS;
  this.Exons = stats.Exons;
  base_count = stats.Scaffolds.base_count;
  codon_count = stats.codon_count;
  this.base_count = base_count;
  this.codon_count = codon_count;
  this.n_bases = sum(base_count);
  this.n_codons = sum(codon_count);

  return this;
}

Codon_usage.prototype.set_frequency = function(){
  var freq = {};
  for( var base in this.base_count ) {
    if( this.base_count.hasOwnProperty( base ) ) {
        freq[base] = this.base_count[base]/this.n_bases * 100;
    }
  }
  var arr = Object.keys( freq ).map(function ( key ) { return freq[key]; });
  var min = Math.min.apply( null, arr );
  var max = Math.max.apply( null, arr );

  for( var codon in this.codon_count ) {
    if( this.codon_count.hasOwnProperty( codon ) ) {
        freq[codon] = this.codon_count[codon]/this.n_codons * 100;
    }
  }
  for (var i = 0; i < this.nt.length; i++){
    freq[this.nt[i].aa] = freq[this.nt[i].aa] ? freq[this.nt[i].aa] + freq[this.nt[i].codon] : freq[this.nt[i].codon];
  }
  this.freq = freq;
  return this;

}

Codon_usage.prototype.set_exp_frequency = function(){
  var exp_freq = {};
  var aa_exp_freqs = {};
  var total_exp_freq = 0;
  for (var i = 0; i < this.nt.length; i++){
    var tmp = this.freq[this.nt[i].first]/100 * this.freq[this.nt[i].second]/100 * this.freq[this.nt[i].third]/100;
    tmp *= 100;
    total_exp_freq += tmp;
    aa_exp_freqs[this.nt[i].aa] = aa_exp_freqs[this.nt[i].aa] ? aa_exp_freqs[this.nt[i].aa] + tmp : tmp;
    exp_freq[this.nt[i].codon] = tmp;
  }
  for (var key in aa_exp_freqs) {
    if (exp_freq.hasOwnProperty(key)) {
      aa_exp_freqs[key] = aa_exp_freqs[key] / total_exp_freq * 100;
    }
  }
  this.exp_freq = exp_freq;
  this.aa_exp_freqs = aa_exp_freqs;
  return this;

}


function GC_content(obj){
  var gc = obj.G + obj.C;
  var atgc = gc + obj.A + obj.U;
  return (gc/atgc*100).toFixed(1);
}
function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

Codon_usage.prototype.setup_plot = function(parent_div){
  var plot;
  var size = 1000;
  this.parent_div = parent_div
  var xScale = d3.scale.linear()
                 .domain([0.5,8.5])
                 .range([0,size*0.7]);
  this.xScale = xScale;
  var yScale = d3.scale.linear()
                 .domain([0.5,8.5])
                 .range([size*0.7,0]);
  this.yScale = yScale;
  var parent = d3.select('#' + parent_div);
  var svg = parent.append('svg');
  svg.attr('width', '98%')
    .attr('height', '98%')
    .attr('viewBox', '0 0 ' + size + ' ' + size)
    .attr('preserveAspectRatio', 'xMidYMid meet')
  var codon_plot_group = svg.append('g');
  codon_plot_group.attr('transform','translate(0,300)');
  this.codon_plot_group = codon_plot_group;
  var bg = codon_plot_group.append('g');
  bg.append('rect')
    .attr('class','cu-border')
    .attr('width',this.xScale(8.5))
    .attr('height',this.yScale(0.5))
  for (var i = 1.5; i < 8; i++){
    bg.append('line')
      .attr('class','cu-grid')
      .attr('x1',this.xScale(0.5))
      .attr('x2',this.xScale(8.5))
      .attr('y1',this.yScale(i))
      .attr('y2',this.yScale(i))
    bg.append('line')
      .attr('class','cu-grid')
      .attr('x1',this.xScale(i))
      .attr('x2',this.xScale(i))
      .attr('y1',this.yScale(0.5))
      .attr('y2',this.yScale(8.5))
  }
  var letter = this.letter;
  var label_group = bg.append('g')
  var labels = label_group.selectAll('g.label').data(this.nt)
  var label = labels.enter().append('g')
  label.attr('transform',function(d){var x = xScale(d.x); var y = yScale(d.y); return 'translate('+x+','+y+')'})
  label.append('text').attr('class','cu-letter').text(function(d){return letter[d.aa]})
       .attr('transform','translate('+-xScale(0.95)+','+-yScale(8.375)+')')
  label.append('text').attr('class','cu-codon').text(function(d){return d.codon})
       .attr('transform','translate('+xScale(0.95)+','+yScale(8.05)+')')

  this.fScale = d3.scale.sqrt().domain([0,100]).range([0,150])
  this.bg = bg;
  this.label_group = label_group;
  this.svg = svg;


var amino_plot_group = svg.append('g');
amino_plot_group.attr('transform','translate(740,300)');
this.amino_plot_group = amino_plot_group;

//amino_plot_group.append('rect').attr('height',700).attr('width',290)
// axes and labels
var aa_order = [];
var letters = this.letter
Object.keys(letters).forEach(function(key){
  aa_order.push({aa:key,letter:letters[key]});
})
this.aa_order = aa_order;
var y = d3.scale.ordinal()
    .domain(aa_order.map(function(d){return d.letter}))
    .rangePoints([20, 680]);
this.aaScale = y;
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

amino_plot_group.append("g")
    .attr("class", "y axis")
    .call(yAxis);


var feature_plot_group = svg.append('g');
feature_plot_group.attr('transform','translate(0,260)');
this.feature_plot_group = feature_plot_group;
this.feature_plot_type = 'Scaffolds';

//feature_plot_group.append('rect').attr('height',290).attr('width',700)
var x = d3.scale.ordinal()
    .domain([0].concat(this[this.feature_plot_type].bins))
    .rangePoints([20, 680]);
this.binScale = x;
var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(function(d) { d*=1; if (d == 0) return d; return d3.format("s")(d.toPrecision(1)); })
    .orient("bottom");
this.xAxis = xAxis;
feature_plot_group.append("g")
    .attr("class", "x axis")
    .call(xAxis);


var control_group = svg.append('g');
control_group.attr('transform','translate(710,10)');
this.control_group = control_group;

var table = control_group.append('g')
var header = table.append('g')
header.attr('transform','translate(0,20)')
var a = header.append('g').attr('transform','translate(0,0)')
a.append('text').text('Feature').attr('class','cu-table cu-table-header')
var b = header.append('g').attr('transform','translate(150,0)')
b.append('text').text('Count').attr('class','cu-table cu-table-header')
var c = header.append('g').attr('transform','translate(250,0)')
c.append('text').text('GC (%)').attr('class','cu-table cu-table-header')

var row = table.append('g')
row.attr('transform','translate(0,50)')
row.append('rect').attr('class','cu-control-rect active').attr('rel','Scaffolds')
var a = row.append('g').attr('transform','translate(0,0)')
a.append('text').text('Scaffolds').attr('class','cu-table')
var b = row.append('g').attr('transform','translate(220,0)')
b.append('text').text(sum(this.Scaffolds.binned)).attr('class','cu-table').style('text-anchor','end')
var c = row.append('g').attr('transform','translate(250,0)')
c.append('text').text(GC_content(this.Scaffolds.base_count)).attr('class','cu-table')

var row = table.append('g')
row.attr('transform','translate(0,80)')
row.append('rect').attr('class','cu-control-rect').attr('rel','Genes')
var a = row.append('g').attr('transform','translate(0,0)')
a.append('text').text('Gene').attr('class','cu-table')
var b = row.append('g').attr('transform','translate(220,0)')
b.append('text').text(sum(this.Genes.binned)).attr('class','cu-table').style('text-anchor','end')
var c = row.append('g').attr('transform','translate(250,0)')
c.append('text').text(GC_content(this.Genes.base_count)).attr('class','cu-table')

var row = table.append('g')
row.attr('transform','translate(0,110)')
row.append('rect').attr('class','cu-control-rect').attr('rel','Transcripts')
var a = row.append('g').attr('transform','translate(0,0)')
a.append('text').text('Transcripts').attr('class','cu-table')
var b = row.append('g').attr('transform','translate(220,0)')
b.append('text').text(sum(this.Transcripts.binned)).attr('class','cu-table').style('text-anchor','end')
var c = row.append('g').attr('transform','translate(250,0)')
c.append('text').text(GC_content(this.Transcripts.base_count)).attr('class','cu-table')

var row = table.append('g')
row.attr('transform','translate(0,140)')
row.append('rect').attr('class','cu-control-rect').attr('rel','CDS')
var a = row.append('g').attr('transform','translate(0,0)')
a.append('text').text('CDS').attr('class','cu-table')
var b = row.append('g').attr('transform','translate(220,0)')
b.append('text').text(sum(this.CDS.binned)).attr('class','cu-table').style('text-anchor','end')
var c = row.append('g').attr('transform','translate(250,0)')
c.append('text').text(GC_content(this.CDS.base_count)).attr('class','cu-table')

var row = table.append('g')
row.attr('transform','translate(0,170)')
row.append('rect').attr('class','cu-control-rect').attr('rel','Exons')
var a = row.append('g').attr('transform','translate(0,0)')
a.append('text').text('Exons').attr('class','cu-table')
var b = row.append('g').attr('transform','translate(220,0)')
b.append('text').text(sum(this.Exons.binned)).attr('class','cu-table').style('text-anchor','end')
var c = row.append('g').attr('transform','translate(250,0)')
c.append('text').text(GC_content(this.Exons.base_count)).attr('class','cu-table')

var usage = this;
d3.selectAll('.cu-control-rect').on('click',function(){
  var rect = d3.select(this);
  if (!rect.classed('active')){
    d3.selectAll('.cu-control-rect').classed('active',false);
    rect.classed('active',true)

    usage.feature_plot_type = rect.attr('rel');
    var x = d3.scale.ordinal()
        .domain([0].concat(usage[usage.feature_plot_type].bins))
        .rangePoints([20, 680]);
    usage.binScale = x;
    usage.xAxis.scale(x);
    usage.feature_plot_group.select(".x.axis").call(xAxis);
    usage.base_count = usage[usage.feature_plot_type].base_count
    usage.n_bases = sum(usage.base_count)
    usage.set_frequency();
    usage.set_exp_frequency();
    usage.plot();
  }
})

codon_plot_group.call(this.tip)
amino_plot_group.call(this.aa_tip)
feature_plot_group.call(this.feat_tip)
  return this;
}

Codon_usage.prototype.tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([10, 0])
  .html(function(d) {
    return '<span class="cu-codon-tip"><strong>'+d.codon+'</strong> (<span style="color:'+d.col+'">'+d.aa+'</span>)<br/>obs: ' + d.freq + '%<br/>exp: ' + d.exp_freq + '%</span>';
  })

Codon_usage.prototype.aa_tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    return '<span class="cu-amino-tip"><strong>'+d.letter+'</strong> (<span style="color:'+d.col+'">'+d.aa+'</span>)<br/>obs: ' + d.freq + '%<br/>exp: ' + d.exp_freq + '%</span>';
  })

Codon_usage.prototype.feat_tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    return '<span class="cu-feat-tip"><strong>Count:</strong> ' + (Math.round(d).toLocaleString()) + '</span>';
  })


Codon_usage.prototype.plot = function(parent_div){
  var freq_group,aa_group,feat_plot_group;
  if (!this.parent_div){
    this.setup_plot(parent_div);
    this.set_frequency();
    this.set_exp_frequency();
    freq_group = this.codon_plot_group.append('g').attr('class','codon_plot_group');
    aa_group = this.amino_plot_group.append('g').attr('class','amino_plot_group');
    feat_plot_group = this.feature_plot_group.append('g').attr('class','feature_plot_group');
  }
  else {
    freq_group = this.svg.select('.codon_plot_group');
    aa_group = this.svg.select('.amino_plot_group');
    feat_plot_group = this.svg.select('.feature_plot_group');

  }
  var observed = this.freq;
  var expected = this.exp_freq;
  var aa_exp_freqs = this.aa_exp_freqs;
  var aa_order = this.aa_order;
  var xScale = this.xScale;
  var yScale = this.yScale;
  var fScale = this.fScale;
  var properties = this.properties;
  var usage = this;
  var color = this.color;

  var freqs = freq_group.selectAll('g').data(this.nt)
  var group = freqs.enter().append('g')
  group.attr('transform',function(d){var x = xScale(d.x); var y = yScale(d.y); return 'translate('+x+','+y+')'})
  group.attr('rel',function(d){ return d.aa})
  group.attr('class',function(d){ return 'cu-freq-group '+d.aa})
  group.append('rect').attr('height',function(d){return xScale(1.5)})
                      .attr('width',function(d){return xScale(1.5)})
                      .attr('x',function(d){return -xScale(1)})
                      .attr('y',function(d){return -xScale(1)})
                      .attr('class','cu-mo-rect')
  group.append('circle').attr('class',function(d){return 'cu-freq'})

  group.append('circle').attr('class',function(d){return 'cu-exp-freq'})

  var obs = freqs.select('.cu-freq');
  obs.attr('r',function(d){ return fScale(observed[d.codon])})
  obs.style('fill',function(d){return color[properties[d.aa]]})
  var exp = freqs.select('.cu-exp-freq');
  exp.attr('r',function(d){return fScale(expected[d.codon])})
  exp.style('stroke',function(d){return color['exp_'+properties[d.aa]]})

  group.on('mouseenter',function(d){d.freq = usage.freq[d.codon].toFixed(2)
                                    d.exp_freq = usage.exp_freq[d.codon].toFixed(2)
                                    d.col = color[properties[d.aa]]
                                    usage.tip.show(d);
                                    var aa = d3.select(this).attr('rel');
                                    d3.selectAll('.'+aa).classed('cu-freq-group-active',true)})
  group.on('mouseleave',function(d){ usage.tip.hide(d);
                                    var aa = d3.select(this).attr('rel');
                                    d3.selectAll('.'+aa).classed('cu-freq-group-active',false)})

  var aa_freqs = aa_group.selectAll('g').data(aa_order);
  var aa_group = aa_freqs.enter().append('g');
  var aaScale = this.aaScale
  aa_group.attr('transform',function(d){var y = aaScale(d.letter)-15; return 'translate(0,'+y+')'})
  aa_group.attr('rel',function(d){ return d.aa})
  aa_group.attr('class',function(d){ return 'cu-freq-group '+d.aa})
  var aa_obs = aa_group.append('rect').attr('class','cu-aa-freq')
  aa_obs.style('fill',function(d){return color[properties[d.aa]]})
  var aa_exp = aa_group.append('line').attr('class','cu-aa-exp-freq')
  aa_exp.style('stroke',function(d){return color['exp_'+properties[d.aa]]})
  aa_freqs.select('rect.cu-aa-freq').attr('height',function(d){return 30})
                      .attr('width',function(d){return 15*observed[d.aa]})
  aa_freqs.select('line.cu-aa-exp-freq').attr('x1',function(d){return 15*aa_exp_freqs[d.aa]})
                         .attr('x2',function(d){return 15*aa_exp_freqs[d.aa]})
                         .attr('y1',function(d){return 0})
                         .attr('y2',function(d){return 30})

  //aa_group.append('circle').attr('class',function(d){return 'cu-freq'})
  aa_group.on('mouseenter',function(d){d.freq = usage.freq[d.aa].toFixed(2)
                                    d.exp_freq = usage.aa_exp_freqs[d.aa].toFixed(2)
                                    d.col = color[properties[d.aa]]
                                    usage.aa_tip.show(d);
                                    var aa = d3.select(this).attr('rel');
                                    d3.selectAll('.'+aa).classed('cu-freq-group-active',true)})
  aa_group.on('mouseleave',function(d){ usage.aa_tip.hide(d);
                                    var aa = d3.select(this).attr('rel');
                                    d3.selectAll('.'+aa).classed('cu-freq-group-active',false)})

  var binned_freqs = this[this.feature_plot_type].binned;
  var total = sum(binned_freqs)
  binned_freqs = binned_freqs.map(function(val){return val/total*100*2.5})
  var binScale = this.binScale;
  var freq_bins = this[this.feature_plot_type].bins;
  var bin_width = binScale(freq_bins[1])-binScale(freq_bins[0]);
  var feat_freqs = feat_plot_group.selectAll('g').data(binned_freqs);
  var feat_group = feat_freqs.enter().append('g');
  feat_group.attr('class',function(d,i){ return 'cu-feat-bin-group '+freq_bins[(i+1)]})
  var feat_bin = feat_group.append('rect')

  feat_freqs.attr('transform',function(d,i){var x = binScale(freq_bins[i])-bin_width; var y = -d; return 'translate('+x+','+y+')'})

  var rect = feat_freqs.select('rect');
  rect.attr('height',function(d){return d})
      .attr('width',function(d){return bin_width})
  feat_freqs.exit().remove();

  feat_freqs.on('mouseenter',function(d){usage.feat_tip.show(d*total/100);})
  feat_freqs.on('mouseleave',function(d){ usage.feat_tip.hide(d*total/100);})


  return this;
}
