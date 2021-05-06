FROM yavalek/drjack-wrf3:latest

ENV BASEDIR=/root/rasp/

WORKDIR /root/

ADD geog.tar.gz $BASEDIR

RUN cp -a $BASEDIR/region.TEMPLATE $BASEDIR/CZECH

COPY CZECH/wrfsi.nl CZECH/rasp.run.parameters.CZECH $BASEDIR/CZECH/
COPY CZECH/rasp.region_data.ncl $BASEDIR/GM/
COPY CZECH/rasp.site.runenvironment $BASEDIR/

ENV PATH="${BASEDIR}/bin:${PATH}"

# initialize
RUN cd $BASEDIR/CZECH/ \
  && wrfsi2wps.pl \
  && wps2input.pl \
  && geogrid.exe

# cleanup
RUN rm -rf $BASEDIR/geog

WORKDIR /root/rasp/

VOLUME ["/root/rasp/CZECH/OUT/", "/root/rasp/CZECH/LOG/"]

CMD ["runGM", "CZECH"]
