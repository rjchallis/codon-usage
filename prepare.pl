#!/usr/bin/perl -w

use strict;
use JSON;

my %codons;
my %bases;
my $prefix;
while (<>){
	chomp;
	next if m/^>/;
	s/T/U/gi;
	tr/[a-z]/[A-Z]/;
	$_ = $prefix.$_ if $prefix;
	my @row = (m/\w{1,3}/g);
	$prefix = undef;
	if (length($row[-1]) != 3){
		$prefix = pop @row;
	}
	while (my $codon = shift @row){
		$codons{$codon}++ if $codon =~ m/^[acgtu]+$/i;
	}
	@row = (m/\w/g);
	while (my $base = shift @row){
		$bases{$base}++ if $base =~ m/[acgtu]/i;
	}
	
}
my @bases = qw ( A C G U );
foreach my $first (@bases){
	foreach my $second (@bases){
		foreach my $third (@bases){
			$codons{$first.$second.$third} ||= 0;
		}
	}
}

my $json = encode_json \%bases;
print $json,"\n";
$json = encode_json \%codons;
print $json,"\n";