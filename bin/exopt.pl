#!/usr/bin/perl
    use File::Basename;
    $regexp = '^\s*-\s*\*\*(.+)\*\*.+_\((.+)\)\_\s-?\s([^<\n]+)';
    use Data::Dumper;
    %sections;
    while (<>) {
      if (/$regexp/) {
        @parts = ($1, $2, $3);
        @sec = split(/\./,basename($ARGV));
        # @fname = split(/\//,@sec[0]); # split path
        # print $ARGV, @fname[-1], "\n"; #last element fo file path
        $sect = @sec[0] =~ s/-([a-z])/uc($1)/rge; #convert to CamelCase
        next if @parts[0] =~ /width|height|container/;
        @parts[2] =~ s/(["`])/\\$1/g;
        $sections{ $sect }{ @parts[0] } = "{ type: \"@parts[1]\", help: \"@parts[2]\" }";
    }
  }
  @secs;
  for $section ( keys %sections ) {
    @opts = ();
    for $option ( keys %{ $sections{$section} } ) {
         push(@opts, "\t\t$option: $sections{$section}{$option}");
    }
    @opts = sort @opts;
    push(@secs, "\n\t$section: {\n" . join(",\n", @opts) . "\n\t}");
    # print join(",\n", @opts);
    # print "\n\t},\n";
  }
  print "export default {\n";
  print join(",\n", sort @secs);
  # print Dumper \%sections;
  print "\n}\n";
