import * as React from 'react';
import type { OpenBridgeAssetProps } from './runtime/renderOpenBridgeSvg';
import { BuildingBlocksCompassConfigCompassRadialAdviceOptimal } from "./components/building-blocks/compass/config-compass-radial-advice-optimal";
import { BuildingBlocksCompassConfigCompassArcAdviceOptimal } from "./components/building-blocks/compass/config-compass-arc-advice-optimal";
import { BuildingBlocksCompassConfigCompassRadialAdviceDanger } from "./components/building-blocks/compass/config-compass-radial-advice-danger";
import { BuildingBlocksCompassConfigCompassArcAdviceDanger } from "./components/building-blocks/compass/config-compass-arc-advice-danger";
import { BuildingBlocksCompassConfigCompassRadialAdvice } from "./components/building-blocks/compass/config-compass-radial-advice";
import { BuildingBlocksCompassConfigCompassRadialAdviceTypeArea } from "./components/building-blocks/compass/config-compass-radial-advice/type-area";
import { BuildingBlocksCompassConfigCompassRadialAdviceTypePoint } from "./components/building-blocks/compass/config-compass-radial-advice/type-point";
import { BuildingBlocksCompassConfigCompassArcAdvice } from "./components/building-blocks/compass/config-compass-arc-advice";
import { BuildingBlocksCompassConfigCompassArcAdviceTypeArea } from "./components/building-blocks/compass/config-compass-arc-advice/type-area";
import { BuildingBlocksCompassConfigCompassArcAdviceTypePoint } from "./components/building-blocks/compass/config-compass-arc-advice/type-point";
import { BuildingBlocksCompassConfigCompassLinearAdvice } from "./components/building-blocks/compass/config-compass-linear-advice";
import { BuildingBlocksCompassConfigCompassLinearAdvicePresetAdvice } from "./components/building-blocks/compass/config-compass-linear-advice/preset-advice";
import { BuildingBlocksHeadingConfigHeadingRadialAdviceOptimal } from "./components/building-blocks/heading/config-heading-radial-advice-optimal";
import { BuildingBlocksHeadingConfigHeadingArcAdviceOptimal } from "./components/building-blocks/heading/config-heading-arc-advice-optimal";
import { BuildingBlocksHeadingConfigHeadingRadialAdviceDanger } from "./components/building-blocks/heading/config-heading-radial-advice-danger";
import { BuildingBlocksHeadingConfigHeadingArcAdviceDanger } from "./components/building-blocks/heading/config-heading-arc-advice-danger";
import { BuildingBlocksHeadingConfigHeadingRadialAdvice } from "./components/building-blocks/heading/config-heading-radial-advice";
import { BuildingBlocksHeadingConfigHeadingRadialAdviceTypeArea } from "./components/building-blocks/heading/config-heading-radial-advice/type-area";
import { BuildingBlocksHeadingConfigHeadingRadialAdviceTypePoint } from "./components/building-blocks/heading/config-heading-radial-advice/type-point";
import { BuildingBlocksHeadingConfigHeadingArcAdvice } from "./components/building-blocks/heading/config-heading-arc-advice";
import { BuildingBlocksHeadingConfigHeadingArcAdviceTypeArea } from "./components/building-blocks/heading/config-heading-arc-advice/type-area";
import { BuildingBlocksHeadingConfigHeadingArcAdviceTypePoint } from "./components/building-blocks/heading/config-heading-arc-advice/type-point";
import { BuildingBlocksHeadingConfigHeadingLinearAdvice } from "./components/building-blocks/heading/config-heading-linear-advice";
import { BuildingBlocksRateOfTurnConfigRotRadialAdviceOptimal } from "./components/building-blocks/rate-of-turn/config-rot-radial-advice-optimal";
import { BuildingBlocksRateOfTurnConfigRotArcAdviceOptimal } from "./components/building-blocks/rate-of-turn/config-rot-arc-advice-optimal";
import { BuildingBlocksRateOfTurnConfigRotRadialAdviceDanger } from "./components/building-blocks/rate-of-turn/config-rot-radial-advice-danger";
import { BuildingBlocksRateOfTurnConfigRotArcAdviceDanger } from "./components/building-blocks/rate-of-turn/config-rot-arc-advice-danger";
import { BuildingBlocksRateOfTurnConfigHeadingRadialAdvice } from "./components/building-blocks/rate-of-turn/config-heading-radial-advice";
import { BuildingBlocksRateOfTurnConfigHeadingRadialAdviceTypeArea } from "./components/building-blocks/rate-of-turn/config-heading-radial-advice/type-area";
import { BuildingBlocksRateOfTurnConfigHeadingRadialAdviceTypePoint } from "./components/building-blocks/rate-of-turn/config-heading-radial-advice/type-point";
import { BuildingBlocksRateOfTurnConfigHeadingArcAdvice } from "./components/building-blocks/rate-of-turn/config-heading-arc-advice";
import { BuildingBlocksRateOfTurnConfigHeadingArcAdviceTypeArea } from "./components/building-blocks/rate-of-turn/config-heading-arc-advice/type-area";
import { BuildingBlocksRateOfTurnConfigHeadingArcAdviceTypePoint } from "./components/building-blocks/rate-of-turn/config-heading-arc-advice/type-point";
import { BuildingBlocksRateOfTurnConfigHeadingLinearAdvice } from "./components/building-blocks/rate-of-turn/config-heading-linear-advice";
import { BuildingBlocksSpeedConfigSpeedRadialAdviceOptimal } from "./components/building-blocks/speed/config-speed-radial-advice-optimal";
import { BuildingBlocksSpeedConfigSpeedRadialAdviceDanger } from "./components/building-blocks/speed/config-speed-radial-advice-danger";
import { BuildingBlocksSpeedConfigSpeedRadialAdvice } from "./components/building-blocks/speed/config-speed-radial-advice";
import { BuildingBlocksSpeedConfigSpeedRadialAdviceTypeArea } from "./components/building-blocks/speed/config-speed-radial-advice/type-area";
import { BuildingBlocksSpeedConfigSpeedRadialAdviceTypePoint } from "./components/building-blocks/speed/config-speed-radial-advice/type-point";
import { BuildingBlocksDepthConfigDepthAdvice } from "./components/building-blocks/depth/config-depth-advice";
import { BuildingBlocksDepthConfigDepthAdvicePresetCaution } from "./components/building-blocks/depth/config-depth-advice/preset-caution";
import { BuildingBlocksMainEngineConfigMainEngineAdviceTypeRpmStyleRegular } from "./components/building-blocks/main-engine/config-main-engine-advice/type-rpm-style-regular";
import { BuildingBlocksMainEngineConfigMainEngineAdviceTypeRpmStylePropellar } from "./components/building-blocks/main-engine/config-main-engine-advice/type-rpm-style-propellar";
import { BuildingBlocksMainEngineConfigMainEngineAdviceTypePitchStyleRegular } from "./components/building-blocks/main-engine/config-main-engine-advice/type-pitch-style-regular";
import { BuildingBlocksMainEngineConfigMainEngineAdviceTypePitchStylePropellar } from "./components/building-blocks/main-engine/config-main-engine-advice/type-pitch-style-propellar";
import { BuildingBlocksAzimuthConfigAzimuthAdviceOptimal } from "./components/building-blocks/azimuth/config-azimuth-advice-optimal";
import { BuildingBlocksAzimuthConfigAzimuthAdviceFrame } from "./components/building-blocks/azimuth/config-azimuth-advice-frame";
import { BuildingBlocksAzimuthConfigAzimuthAdviceCaution } from "./components/building-blocks/azimuth/config-azimuth-advice-caution";
import { BuildingBlocksAzimuthConfigAzimuthAdviceDanger } from "./components/building-blocks/azimuth/config-azimuth-advice-danger";
import { BuildingBlocksAzimuthConfigAzimuthAdvicePort } from "./components/building-blocks/azimuth/config-azimuth-advice-port";
import { BuildingBlocksAzimuthConfigAzimuthAdviceStbd } from "./components/building-blocks/azimuth/config-azimuth-advice-stbd";
import { BuildingBlocksAzimuthConfigAzimuthAdviceTypeArea } from "./components/building-blocks/azimuth/config-azimuth-advice/type-area";
import { BuildingBlocksAzimuthConfigAzimuthAdviceTypePortStbd } from "./components/building-blocks/azimuth/config-azimuth-advice/type-port-stbd";
import { BuildingBlocksAzimuthConfigAzimuthAdviceTypePoint } from "./components/building-blocks/azimuth/config-azimuth-advice/type-point";
import { BuildingBlocksRudderConfigRudderAdviceOptimal } from "./components/building-blocks/rudder/config-rudder-advice-optimal";
import { BuildingBlocksRudderConfigRudderAdviceFrame } from "./components/building-blocks/rudder/config-rudder-advice-frame";
import { BuildingBlocksRudderConfigRudderAdviceCaution } from "./components/building-blocks/rudder/config-rudder-advice-caution";
import { BuildingBlocksRudderConfigRudderAdviceDanger } from "./components/building-blocks/rudder/config-rudder-advice-danger";
import { BuildingBlocksRudderConfigRudderAdvice } from "./components/building-blocks/rudder/config-rudder-advice";
import { BuildingBlocksRudderConfigRudderAdviceTypeArea } from "./components/building-blocks/rudder/config-rudder-advice/type-area";
import { BuildingBlocksRudderConfigRudderAdviceTypePoint } from "./components/building-blocks/rudder/config-rudder-advice/type-point";
import { BuildingBlocksGaugeRadialConfigGauge270AdviceOptimal } from "./components/building-blocks/gauge-radial/config-gauge-270-advice-optimal";
import { BuildingBlocksGaugeRadialConfigGauge180AdviceOptimal } from "./components/building-blocks/gauge-radial/config-gauge-180-advice-optimal";
import { BuildingBlocksGaugeRadialConfigGauge270AdviceFrame } from "./components/building-blocks/gauge-radial/config-gauge-270-advice-frame";
import { BuildingBlocksGaugeRadialConfigGauge180AdviceFrame } from "./components/building-blocks/gauge-radial/config-gauge-180-advice-frame";
import { BuildingBlocksGaugeRadialConfigGauge270AdviceCaution } from "./components/building-blocks/gauge-radial/config-gauge-270-advice-caution";
import { BuildingBlocksGaugeRadialConfigGauge180AdviceCaution } from "./components/building-blocks/gauge-radial/config-gauge-180-advice-caution";
import { BuildingBlocksGaugeRadialConfigGauge270AdviceTypeArea } from "./components/building-blocks/gauge-radial/config-gauge-270-advice/type-area";
import { BuildingBlocksGaugeRadialConfigGauge270AdviceTypePoint } from "./components/building-blocks/gauge-radial/config-gauge-270-advice/type-point";
import { BuildingBlocksGaugeRadialConfigGauge180AdviceTypeArea } from "./components/building-blocks/gauge-radial/config-gauge-180-advice/type-area";
import { BuildingBlocksGaugeRadialConfigGauge180AdviceTypePoint } from "./components/building-blocks/gauge-radial/config-gauge-180-advice/type-point";
import { BuildingBlocksWatchConfigWatchAdviceOptimal } from "./components/building-blocks/watch/config-watch-advice-optimal";
import { BuildingBlocksWatchConfigWatchAdviceCaution } from "./components/building-blocks/watch/config-watch-advice-caution";
import { BuildingBlocksWatchConfigWatchAdviceTypeArea } from "./components/building-blocks/watch/config-watch-advice/type-area";
import { BuildingBlocksWatchConfigWatchAdviceTypePoint } from "./components/building-blocks/watch/config-watch-advice/type-point";
import { BuildingBlocksSailConfigSailAdviceOptimal } from "./components/building-blocks/sail/config-sail-advice-optimal";
import { BuildingBlocksSailConfigSailAdviceFrame } from "./components/building-blocks/sail/config-sail-advice-frame";
import { BuildingBlocksSailConfigSailAdviceCaution } from "./components/building-blocks/sail/config-sail-advice-caution";
import { BuildingBlocksSailConfigSailAdviceDanger } from "./components/building-blocks/sail/config-sail-advice-danger";
import { BuildingBlocksSailConfigRollAdvice } from "./components/building-blocks/sail/config-roll-advice";
import { BuildingBlocksSailConfigRollAdviceTypeArea } from "./components/building-blocks/sail/config-roll-advice/type-area";
import { BuildingBlocksSailConfigRollAdviceTypePoint } from "./components/building-blocks/sail/config-roll-advice/type-point";
import { BuildingBlocksTunnelThrusterConfigTunnelThrusterLinearAdvice } from "./components/building-blocks/tunnel-thruster/config-tunnel-thruster-linear-advice";
import { BuildingBlocksTunnelThrusterConfigTunnelThrusterLinearAdvicePresetAdvice } from "./components/building-blocks/tunnel-thruster/config-tunnel-thruster-linear-advice/preset-advice";
import { BuildingBlocksGaugeBarConfigGaugeHorizontalLinearAdvice } from "./components/building-blocks/gauge-bar/config-gauge-horizontal-linear-advice";
import { BuildingBlocksGaugeBarConfigGaugeHorizontalLinearAdvicePresetAdvice } from "./components/building-blocks/gauge-bar/config-gauge-horizontal-linear-advice/preset-advice";
import { BuildingBlocksGaugeBarConfigGaugeVerticalAdvice } from "./components/building-blocks/gauge-bar/config-gauge-vertical-advice";
import { BuildingBlocksGaugeBarConfigGaugeVerticalAdvicePresetAdvice } from "./components/building-blocks/gauge-bar/config-gauge-vertical-advice/preset-advice";
import { BuildingBlocksGaugeTrendConfigGaugeVerticalAdvice } from "./components/building-blocks/gauge-trend/config-gauge-vertical-advice";
import { BuildingBlocksGaugeTrendConfigGaugeVerticalAdvicePresetAdvice } from "./components/building-blocks/gauge-trend/config-gauge-vertical-advice/preset-advice";
import { BuildingBlocksMotionConfigRollAdviceOptimal } from "./components/building-blocks/motion/config-roll-advice-optimal";
import { BuildingBlocksMotionConfigPitchAdviceOptimal } from "./components/building-blocks/motion/config-pitch-advice-optimal";
import { BuildingBlocksMotionConfigRollAdviceFrame } from "./components/building-blocks/motion/config-roll-advice-frame";
import { BuildingBlocksMotionConfigPitchrollRollAdviceFrame } from "./components/building-blocks/motion/config-pitchroll-roll-advice-frame";
import { BuildingBlocksMotionConfigPitchAdviceFrame } from "./components/building-blocks/motion/config-pitch-advice-frame";
import { BuildingBlocksMotionConfigPitchrollPitchAdviceFrame } from "./components/building-blocks/motion/config-pitchroll-pitch-advice-frame";
import { BuildingBlocksMotionConfigRollAdviceDanger } from "./components/building-blocks/motion/config-roll-advice-danger";
import { BuildingBlocksMotionConfigPitchrollRollAdviceDanger } from "./components/building-blocks/motion/config-pitchroll-roll-advice-danger";
import { BuildingBlocksMotionConfigPitchAdviceDanger } from "./components/building-blocks/motion/config-pitch-advice-danger";
import { BuildingBlocksMotionConfigPitchrollPitchDanger } from "./components/building-blocks/motion/config-pitchroll-pitch-danger";
import { BuildingBlocksMotionConfigRollAdviceTypeArea } from "./components/building-blocks/motion/config-roll-advice/type-area";
import { BuildingBlocksMotionConfigRollAdviceTypeAreaDual } from "./components/building-blocks/motion/config-roll-advice/type-area-dual";
import { BuildingBlocksMotionConfigRollAdviceTypePoint } from "./components/building-blocks/motion/config-roll-advice/type-point";
import { BuildingBlocksMotionConfigRollAdviceTypeAreaInstance02 } from "./components/building-blocks/motion/config-roll-advice/type-area__instance-02";
import { BuildingBlocksMotionConfigRollAdviceTypeAreaDualInstance02 } from "./components/building-blocks/motion/config-roll-advice/type-area-dual__instance-02";
import { BuildingBlocksMotionConfigRollAdviceTypePointInstance02 } from "./components/building-blocks/motion/config-roll-advice/type-point__instance-02";
import { BuildingBlocksMotionConfigPitchrollAdviceTypeArea } from "./components/building-blocks/motion/config-pitchroll-advice/type-area";
import { BuildingBlocksMotionConfigPitchrollAdviceTypeDualFrame } from "./components/building-blocks/motion/config-pitchroll-advice/type-dual-frame";
import { BuildingBlocksMotionConfigPitchrollAdviceTypePoint } from "./components/building-blocks/motion/config-pitchroll-advice/type-point";
import { BuildingBlocksMotionConfigHeaveAdvicePresetRegular } from "./components/building-blocks/motion/config-heave-advice/preset-regular";
import { BuildingBlocksMotionConfigPitchrollheaveAdvicePresetRegular } from "./components/building-blocks/motion/config-pitchrollheave-advice/preset-regular";
import { ObjectsAirDrones } from "./components/objects/air-drones";
import { ObjectsAirDronesAirDrone } from "./components/objects/air-drones/air-drone";
import { ObjectsAirDronesAirDroneTypeSmallViewTop } from "./components/objects/air-drones/air-drone/type-small-view-top";
import { ObjectsAirDronesAirDroneTypeSmallViewFront } from "./components/objects/air-drones/air-drone/type-small-view-front";
import { ObjectsAirDronesAirDroneTypeSmallViewStbdSide } from "./components/objects/air-drones/air-drone/type-small-view-stbd-side";
import { ObjectsAirDronesAirDroneTypeMediumViewFront } from "./components/objects/air-drones/air-drone/type-medium-view-front";
import { ObjectsAirDronesAirDroneTypeMediumViewStbdSide } from "./components/objects/air-drones/air-drone/type-medium-view-stbd-side";
import { ObjectsAirDronesAirDroneTypeMediumViewTop } from "./components/objects/air-drones/air-drone/type-medium-view-top";
import { ObjectsAirDronesAirDroneTypeMediumViewTopUnion } from "./components/objects/air-drones/air-drone/type-medium-view-top/union";
import { ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance02 } from "./components/objects/air-drones/air-drone/type-medium-view-top/union__instance-02";
import { ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance03 } from "./components/objects/air-drones/air-drone/type-medium-view-top/union__instance-03";
import { ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance04 } from "./components/objects/air-drones/air-drone/type-medium-view-top/union__instance-04";
import { ObjectsVesselsVesselTypePsvViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-psv-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeCargoWindViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-wind-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeTankerViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-tanker-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeCargoViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeSovViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-sov-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeFishingVesselViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-fishing-vessel-view-top-ccrp-false";
import { ObjectsVesselsVesselTypePsvViewAftCcrpFalse } from "./components/objects/vessels/vessel/type-psv-view-aft-ccrp-false";
import { ObjectsVesselsVesselTypePsvViewForeCcrpFalse } from "./components/objects/vessels/vessel/type-psv-view-fore-ccrp-false";
import { ObjectsVesselsVesselTypeCargoWindViewForeCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-wind-view-fore-ccrp-false";
import { ObjectsVesselsVesselTypeTankerViewForeCcrpFalse } from "./components/objects/vessels/vessel/type-tanker-view-fore-ccrp-false";
import { ObjectsVesselsVesselTypeCargoViewForeCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-view-fore-ccrp-false";
import { ObjectsVesselsVesselTypeGenericViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-generic-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeGenericViewTopCcrpTrue } from "./components/objects/vessels/vessel/type-generic-view-top-ccrp-true";
import { ObjectsVesselsVesselTypeGenericViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-generic-view-side-ccrp-false";
import { ObjectsVesselsVesselTypePsvViewTopCcrpTrue } from "./components/objects/vessels/vessel/type-psv-view-top-ccrp-true";
import { ObjectsVesselsVesselTypePsvViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-psv-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeCargoWindViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-wind-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeTankerViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-tanker-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeCargoViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-cargo-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeUsvLargeViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-usv-large-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-usv-small-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeSovViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-sov-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeFishingVesselViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-fishing-vessel-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeCarFerryViewSideCcrpFalse } from "./components/objects/vessels/vessel/type-car-ferry-view-side-ccrp-false";
import { ObjectsVesselsVesselTypeCarFerryViewTopCcrpFalse } from "./components/objects/vessels/vessel/type-car-ferry-view-top-ccrp-false";
import { ObjectsVesselsVesselTypeCarFerryViewForeCcrpFalse } from "./components/objects/vessels/vessel/type-car-ferry-view-fore-ccrp-false";
import { ObjectsVesselsVesselTypeCarFerryViewAftCcrpFalse } from "./components/objects/vessels/vessel/type-car-ferry-view-aft-ccrp-false";
import { ObjectsUnderwaterDrones } from "./components/objects/underwater-drones";
import { ObjectsUnderwaterDronesRov } from "./components/objects/underwater-drones/rov";
import { ObjectsUnderwaterDronesRovTypeRovViewSideCcrpFalse } from "./components/objects/underwater-drones/rov/type-rov-view-side-ccrp-false";
import { ObjectsUnderwaterDronesRovTypeRovViewTopCcrpFalse } from "./components/objects/underwater-drones/rov/type-rov-view-top-ccrp-false";
import { ObjectsUnderwaterDronesRovTypeRovViewForeCcrpFalse } from "./components/objects/underwater-drones/rov/type-rov-view-fore-ccrp-false";
import { IndicatorsConning } from "./components/indicators/conning";
import { IndicatorsConningConningCompass } from "./components/indicators/conning/conning-compass";
import { IndicatorsConningConningCompassDirectionHeadingTypeRegular } from "./components/indicators/conning/conning-compass/direction-heading-type-regular";
import { IndicatorsConningConningCompassDirectionCourseTypeRegular } from "./components/indicators/conning/conning-compass/direction-course-type-regular";
import { IndicatorsConningConningCompassDirectionNorthTypeRegular } from "./components/indicators/conning/conning-compass/direction-north-type-regular";
import { IndicatorsConningConningCompassDirectionNorthTypeLabeled } from "./components/indicators/conning/conning-compass/direction-north-type-labeled";
import { IndicatorsConningConningCompassDirectionHeadingTypeLabeled } from "./components/indicators/conning/conning-compass/direction-heading-type-labeled";
import { IndicatorsConningConningCompassDirectionCourseTypeLabeled } from "./components/indicators/conning/conning-compass/direction-course-type-labeled";
import { IndicatorsConningConningHeading } from "./components/indicators/conning/conning-heading";
import { IndicatorsConningConningHeadingTypeHdg } from "./components/indicators/conning/conning-heading/type-hdg";
import { IndicatorsConningConningHeadingTypeXtd } from "./components/indicators/conning/conning-heading/type-xtd";
import { IndicatorsConningConningRateofturn } from "./components/indicators/conning/conning-rateofturn";
import { IndicatorsConningConningRateofturnTypeRadial } from "./components/indicators/conning/conning-rateofturn/type-radial";
import { IndicatorsConningConningRateofturnTypeLinear } from "./components/indicators/conning/conning-rateofturn/type-linear";
import { IndicatorsConningConningDepth } from "./components/indicators/conning/conning-depth";
import { IndicatorsConningConningDepthTypeSpline } from "./components/indicators/conning/conning-depth/type-spline";
import { IndicatorsConningConningDepthTypeFilled } from "./components/indicators/conning/conning-depth/type-filled";
import { IndicatorsConningConningSpeed } from "./components/indicators/conning/conning-speed";
import { IndicatorsConningConningSpeedTypeNeedle } from "./components/indicators/conning/conning-speed/type-needle";
import { IndicatorsConningConningPitch } from "./components/indicators/conning/conning-pitch";
import { IndicatorsConningConningPitchTypeRegular } from "./components/indicators/conning/conning-pitch/type-regular";
import { IndicatorsConningConningRoll } from "./components/indicators/conning/conning-roll";
import { IndicatorsConningConningRollTypeEnhanced } from "./components/indicators/conning/conning-roll/type-enhanced";
import { IndicatorsConningConningRollTypeRegular } from "./components/indicators/conning/conning-roll/type-regular";
import { IndicatorsConningConningHeave } from "./components/indicators/conning/conning-heave";
import { IndicatorsConningConningHeaveTypeEnhanced } from "./components/indicators/conning/conning-heave/type-enhanced";
import { IndicatorsConningConningHeaveTypeRegular } from "./components/indicators/conning/conning-heave/type-regular";
import { IndicatorsEnvironment } from "./components/indicators/environment";
import { IndicatorsEnvironmentEnvironmentWind } from "./components/indicators/environment/environment-wind";
import { IndicatorsEnvironmentEnvironmentWindDirectionHeading } from "./components/indicators/environment/environment-wind/direction-heading";
import { IndicatorsEnvironmentEnvironmentWindWind7 } from "./components/indicators/environment/environment-wind/wind-7";
import { IndicatorsEnvironmentEnvironmentWindDirectionLabeled } from "./components/indicators/environment/environment-wind/direction-labeled";
import { IndicatorsEnvironmentEnvironmentWindInstance02 } from "./components/indicators/environment/environment-wind__instance-02";
import { IndicatorsEnvironmentEnvironmentWindInstance03 } from "./components/indicators/environment/environment-wind__instance-03";
import { IndicatorsEnvironmentEnvironmentWindInstance04 } from "./components/indicators/environment/environment-wind__instance-04";
import { IndicatorsEnvironmentEnvironmentCurrent } from "./components/indicators/environment/environment-current";
import { IndicatorsEnvironmentEnvironmentCurrentDirectionHeading } from "./components/indicators/environment/environment-current/direction-heading";
import { IndicatorsEnvironmentEnvironmentCurrentCurrent3 } from "./components/indicators/environment/environment-current/current-3";
import { IndicatorsPropulsion } from "./components/indicators/propulsion";
import { IndicatorsPropulsionPropulsionAzimuth } from "./components/indicators/propulsion/propulsion-azimuth";
import { IndicatorsPropulsionPropulsionAzimuthStateInCommand } from "./components/indicators/propulsion/propulsion-azimuth/state-in-command";
import { IndicatorsPropulsionPropulsionAzimuthStateNotInCommand } from "./components/indicators/propulsion/propulsion-azimuth/state-not-in-command";
import { IndicatorsPropulsionPropulsionAzimuthStateOff } from "./components/indicators/propulsion/propulsion-azimuth/state-off";
import { IndicatorsPropulsionPropulsionTunnelThruster } from "./components/indicators/propulsion/propulsion-tunnel-thruster";
import { IndicatorsPropulsionPropulsionTunnelThrusterStateInCommand } from "./components/indicators/propulsion/propulsion-tunnel-thruster/state-in-command";
import { IndicatorsPropulsionPropulsionTunnelThrusterStateNotInCommand } from "./components/indicators/propulsion/propulsion-tunnel-thruster/state-not-in-command";
import { IndicatorsPropulsionPropulsionTunnelThrusterStateOff } from "./components/indicators/propulsion/propulsion-tunnel-thruster/state-off";
import { IndicatorsPropulsionPropulsionMainEngine } from "./components/indicators/propulsion/propulsion-main-engine";
import { IndicatorsPropulsionPropulsionMainEngineStateInCommand } from "./components/indicators/propulsion/propulsion-main-engine/state-in-command";
import { IndicatorsPropulsionPropulsionMainEngineStateNotInCommand } from "./components/indicators/propulsion/propulsion-main-engine/state-not-in-command";
import { IndicatorsPropulsionPropulsionMainEngineStateOff } from "./components/indicators/propulsion/propulsion-main-engine/state-off";
import { IndicatorsPropulsionPropulsionMainEngineStateOffFrameBackground } from "./components/indicators/propulsion/propulsion-main-engine/state-off/frame-background";
import { IndicatorsPropulsionPropulsionRudder } from "./components/indicators/propulsion/propulsion-rudder";
import { IndicatorsPropulsionPropulsionRudderStateInCommand } from "./components/indicators/propulsion/propulsion-rudder/state-in-command";
import { IndicatorsPropulsionPropulsionRudderStateNotInCommand } from "./components/indicators/propulsion/propulsion-rudder/state-not-in-command";
import { IndicatorsPropulsionPropulsionRudderStateOff } from "./components/indicators/propulsion/propulsion-rudder/state-off";
import { IndicatorsPropulsionPropulsionRudderStateOffPropulsionRudder } from "./components/indicators/propulsion/propulsion-rudder/state-off/propulsion-rudder";
import { IndicatorsGauges } from "./components/indicators/gauges";
import { IndicatorsGaugesGaugeBar } from "./components/indicators/gauges/gauge-bar";
import { IndicatorsGaugesGaugeBarDirectionVerticalTypeFill } from "./components/indicators/gauges/gauge-bar/direction-vertical-type-fill";
import { IndicatorsGaugesGaugeBarDirectionHorizontalTypeFill } from "./components/indicators/gauges/gauge-bar/direction-horizontal-type-fill";
import { IndicatorsGaugesGaugeBarDirectionHorizontalTypeTinded } from "./components/indicators/gauges/gauge-bar/direction-horizontal-type-tinded";
import { IndicatorsGaugesGaugeBarDirectionVerticalTypeTinded } from "./components/indicators/gauges/gauge-bar/direction-vertical-type-tinded";
import { IndicatorsGaugesGaugeTrend } from "./components/indicators/gauges/gauge-trend";
import { IndicatorsGaugesGaugeRadial } from "./components/indicators/gauges/gauge-radial";
import { IndicatorsGaugesGaugeRadialSector270StyleRegular } from "./components/indicators/gauges/gauge-radial/sector-270-style-regular";
import { IndicatorsGaugesGaugeRadialSector180StyleRegular } from "./components/indicators/gauges/gauge-radial/sector-180-style-regular";
import { IndicatorsGaugesGaugeRadialSector270StyleFlat } from "./components/indicators/gauges/gauge-radial/sector-270-style-flat";
import { IndicatorsGaugesGaugeRadialSector270StyleFlatNArrow } from "./components/indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow";
import { IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrack } from "./components/indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow/frame-track";
import { IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrackInstance02 } from "./components/indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow/frame-track__instance-02";
import { IndicatorsGaugesGaugeRadialSector180StyleFlat } from "./components/indicators/gauges/gauge-radial/sector-180-style-flat";
import { IndicatorsGaugesGaugeRadialSector180StyleFlatWind7 } from "./components/indicators/gauges/gauge-radial/sector-180-style-flat/wind-7";
import { EnvironmentWindTypeHistogramPriorityRegular } from "./components/environment/wind/type-histogram-priority-regular";
import { EnvironmentWindTypeHistogramPriorityEnhanced } from "./components/environment/wind/type-histogram-priority-enhanced";
import { EnvironmentWindTypeWindDirectionPriorityRegular } from "./components/environment/wind/type-wind-direction-priority-regular";
import { EnvironmentWindTypeWindDirectionPriorityEnhanced } from "./components/environment/wind/type-wind-direction-priority-enhanced";
import { EnvironmentWindTypeWindForcePriorityRegular } from "./components/environment/wind/type-wind-force-priority-regular";
import { EnvironmentWindTypeWindForcePriorityRegularWind } from "./components/environment/wind/type-wind-force-priority-regular/wind";
import { EnvironmentWindTypeWindForcePriorityEnhanced } from "./components/environment/wind/type-wind-force-priority-enhanced";
import { EnvironmentWindTypeWindForcePriorityEnhancedWind } from "./components/environment/wind/type-wind-force-priority-enhanced/wind";
import { EnvironmentWindCurrentTypeDirectionPriorityRegular } from "./components/environment/wind/current/type-direction-priority-regular";
import { EnvironmentWindCurrentTypeDirectionPriorityEnhanced } from "./components/environment/wind/current/type-direction-priority-enhanced";
import { EnvironmentWindCurrentTypeVesselPriorityEnhanced } from "./components/environment/wind/current/type-vessel-priority-enhanced";
import { EnvironmentWindCurrentTypeVesselPriorityRegular } from "./components/environment/wind/current/type-vessel-priority-regular";
import { EnvironmentWindCurrentDocumentationText } from "./components/environment/wind/current/documentation-text";
import { GaugesGaugeRadialGaugeRadial270 } from "./components/gauges/gauge-radial/gauge-radial-270";
import { GaugesGaugeRadialGaugeRadial270TypeTintBarEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-270/type-tint-bar-enhanced-false";
import { GaugesGaugeRadialGaugeRadial270TypeTintBarEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-270/type-tint-bar-enhanced-true";
import { GaugesGaugeRadialGaugeRadial270TypeFillBarEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-270/type-fill-bar-enhanced-false";
import { GaugesGaugeRadialGaugeRadial270TypeFillBarEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-270/type-fill-bar-enhanced-true";
import { GaugesGaugeRadialGaugeRadial270TypeNeedleEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-270/type-needle-enhanced-false";
import { GaugesGaugeRadialGaugeRadial270TypeNeedleEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-270/type-needle-enhanced-true";
import { GaugesGaugeRadialGaugeRadial180 } from "./components/gauges/gauge-radial/gauge-radial-180";
import { GaugesGaugeRadialGaugeRadial180TypeTintBarEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-180/type-tint-bar-enhanced-false";
import { GaugesGaugeRadialGaugeRadial180TypeFillBarEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-180/type-fill-bar-enhanced-false";
import { GaugesGaugeRadialGaugeRadial180TypeNeedleEnhancedFalse } from "./components/gauges/gauge-radial/gauge-radial-180/type-needle-enhanced-false";
import { GaugesGaugeRadialGaugeRadial180TypeTintBarEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-180/type-tint-bar-enhanced-true";
import { GaugesGaugeRadialGaugeRadial180TypeFillBarEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-180/type-fill-bar-enhanced-true";
import { GaugesGaugeRadialGaugeRadial180TypeNeedleEnhancedTrue } from "./components/gauges/gauge-radial/gauge-radial-180/type-needle-enhanced-true";
import { GaugesGaugeRadialGaugeRadial180DocumentationText } from "./components/gauges/gauge-radial/gauge-radial-180/documentation-text";
import { GaugesGaugeTrendHasScaleTrueTypeBarNegativeFalsePriorityRegular } from "./components/gauges/gauge-trend/has-scale-true-type-bar-negative-false-priority-regular";
import { GaugesGaugeTrendAdvice } from "./components/gauges/gauge-trend/advice";
import { GaugesGaugeTrendHasScaleTrueTypeBarNegativeFalsePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-true-type-bar-negative-false-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance02 } from "./components/gauges/gauge-trend/advice__instance-02";
import { GaugesGaugeTrendHasScaleTrueTypeBarNegativeTruePriorityRegular } from "./components/gauges/gauge-trend/has-scale-true-type-bar-negative-true-priority-regular";
import { GaugesGaugeTrendAdviceInstance03 } from "./components/gauges/gauge-trend/advice__instance-03";
import { GaugesGaugeTrendHasScaleTrueTypeBarNegativeTruePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-true-type-bar-negative-true-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance04 } from "./components/gauges/gauge-trend/advice__instance-04";
import { GaugesGaugeTrendHasScaleFalseTypeBarNegativeFalsePriorityRegular } from "./components/gauges/gauge-trend/has-scale-false-type-bar-negative-false-priority-regular";
import { GaugesGaugeTrendAdviceInstance05 } from "./components/gauges/gauge-trend/advice__instance-05";
import { GaugesGaugeTrendHasScaleFalseTypeBarNegativeFalsePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-false-type-bar-negative-false-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance06 } from "./components/gauges/gauge-trend/advice__instance-06";
import { GaugesGaugeTrendHasScaleFalseTypeBarNegativeTruePriorityRegular } from "./components/gauges/gauge-trend/has-scale-false-type-bar-negative-true-priority-regular";
import { GaugesGaugeTrendAdviceInstance07 } from "./components/gauges/gauge-trend/advice__instance-07";
import { GaugesGaugeTrendHasScaleFalseTypeBarNegativeTruePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-false-type-bar-negative-true-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance08 } from "./components/gauges/gauge-trend/advice__instance-08";
import { GaugesGaugeTrendHasScaleFalseTypeSplineNegativeFalsePriorityRegular } from "./components/gauges/gauge-trend/has-scale-false-type-spline-negative-false-priority-regular";
import { GaugesGaugeTrendAdviceInstance09 } from "./components/gauges/gauge-trend/advice__instance-09";
import { GaugesGaugeTrendHasScaleFalseTypeSplineNegativeFalsePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-false-type-spline-negative-false-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance10 } from "./components/gauges/gauge-trend/advice__instance-10";
import { GaugesGaugeTrendHasScaleFalseTypeSplineNegativeTruePriorityRegular } from "./components/gauges/gauge-trend/has-scale-false-type-spline-negative-true-priority-regular";
import { GaugesGaugeTrendAdviceInstance11 } from "./components/gauges/gauge-trend/advice__instance-11";
import { GaugesGaugeTrendHasScaleFalseTypeSplineNegativeTruePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-false-type-spline-negative-true-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance12 } from "./components/gauges/gauge-trend/advice__instance-12";
import { GaugesGaugeTrendHasScaleTrueTypeSplineNegativeFalsePriorityRegular } from "./components/gauges/gauge-trend/has-scale-true-type-spline-negative-false-priority-regular";
import { GaugesGaugeTrendAdviceInstance13 } from "./components/gauges/gauge-trend/advice__instance-13";
import { GaugesGaugeTrendHasScaleTrueTypeSplineNegativeFalsePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-true-type-spline-negative-false-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance14 } from "./components/gauges/gauge-trend/advice__instance-14";
import { GaugesGaugeTrendHasScaleTrueTypeSplineNegativeTruePriorityRegular } from "./components/gauges/gauge-trend/has-scale-true-type-spline-negative-true-priority-regular";
import { GaugesGaugeTrendAdviceInstance15 } from "./components/gauges/gauge-trend/advice__instance-15";
import { GaugesGaugeTrendHasScaleTrueTypeSplineNegativeTruePriorityEnhanced } from "./components/gauges/gauge-trend/has-scale-true-type-spline-negative-true-priority-enhanced";
import { GaugesGaugeTrendAdviceInstance16 } from "./components/gauges/gauge-trend/advice__instance-16";
import { GaugesGaugeTrendDocumentationText } from "./components/gauges/gauge-trend/documentation-text";
import { GaugesWatchDocumentationText } from "./components/gauges/watch/documentation-text";
import { GaugesWatchStyleRegular } from "./components/gauges/watch/style-regular";
import { GaugesWatchStyleRegularFrameScale } from "./components/gauges/watch/style-regular/frame-scale";
import { GaugesWatchStyleRegularFrameTrack } from "./components/gauges/watch/style-regular/frame-track";
import { GaugesWatchStyleRegularAdvice } from "./components/gauges/watch/style-regular/advice";
import { GaugesWatchStylePlanner } from "./components/gauges/watch/style-planner";
import { GaugesWatchStylePlannerFrameScale } from "./components/gauges/watch/style-planner/frame-scale";
import { GaugesWatchStyleTrack } from "./components/gauges/watch/style-track";
import { GaugesWatchStyleTrackFrameScale } from "./components/gauges/watch/style-track/frame-scale";
import { GaugesWatchStyleTimeline } from "./components/gauges/watch/style-timeline";
import { GaugesWatchStyleTimelineFrameScale } from "./components/gauges/watch/style-timeline/frame-scale";
import { GaugesWatchStyleSquare } from "./components/gauges/watch/style-square";
import { GaugesWatchDigitalNumbersBeta } from "./components/gauges/watch/digital-numbers-beta";
import { GaugesWatchDigitalNumbersBetaNumber1TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-1-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber1TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-1-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber0TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-0-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber0TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-0-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber2TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-2-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber2TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-2-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber3TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-3-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber3TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-3-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber4TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-4-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber4TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-4-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber5TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-5-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber5TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-5-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber6TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-6-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber6TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-6-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber7TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-7-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber7TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-7-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber8TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-8-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber8TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-8-type-minute";
import { GaugesWatchDigitalNumbersBetaNumber9TypeHour } from "./components/gauges/watch/digital-numbers-beta/number-9-type-hour";
import { GaugesWatchDigitalNumbersBetaNumber9TypeMinute } from "./components/gauges/watch/digital-numbers-beta/number-9-type-minute";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignTopTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-top-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalLabelArea } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignTopTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-top-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance02 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-02";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignBottomTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-bottom-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignBottomTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-bottom-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignBottomTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-bottom-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignBottomTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-bottom-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignTopTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-top-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalBarPositive } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-positive";
import { GaugesGaugeBarGaugeBarHorizontalBarNegative } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-negative";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance03 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-03";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignTopTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-top-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance02 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-02";
import { GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance02 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-02";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance04 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-04";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignBottomTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-bottom-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignBottomTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-bottom-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignBottomTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-bottom-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignBottomTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-bottom-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignTopTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-top-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance07 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-07";
import { GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance07 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-07";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance05 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-05";
import { GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignTopTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-top-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance08 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-08";
import { GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance08 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-08";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance06 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-06";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignTopTypeBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-top-type-bar";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance07 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-07";
import { GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignTopTypeTintBar } from "./components/gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-top-type-tint-bar";
import { GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance08 } from "./components/gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-08";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentRightTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-right-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdvice } from "./components/gauges/gauge-bar/gauge-vertical/advice";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentRightTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-right-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance02 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-02";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentRightTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-right-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance03 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-03";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentRightTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-right-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance04 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-04";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentLeftTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-left-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance05 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-05";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentLeftTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-left-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance06 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-06";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentLeftTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-left-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance07 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-07";
import { GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentLeftTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-left-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance08 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-08";
import { GaugesGaugeBarGaugeVerticalAdviceNegativeTruePriorityRegularAlignmentRightTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/advice/negative-true-priority-regular-alignment-right-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance09 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-09";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentRightTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-right-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance10 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-10";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentRightTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-right-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance11 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-11";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentRightTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-right-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance12 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-12";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentLeftTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-left-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance13 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-13";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentLeftTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-left-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance14 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-14";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentLeftTypeFillBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-left-type-fill-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance15 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-15";
import { GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentLeftTypeTintBar } from "./components/gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-left-type-tint-bar";
import { GaugesGaugeBarGaugeVerticalAdviceInstance16 } from "./components/gauges/gauge-bar/gauge-vertical/advice__instance-16";
import { GaugesGaugeBarGaugeVerticalDocumentationText } from "./components/gauges/gauge-bar/gauge-vertical/documentation-text";
import { MotionMotionControlSurgeSwayYaw } from "./components/motion/motion-control/surge-sway-yaw";
import { MotionMotionControlSurgeSwayYawVerticalResizeFalse } from "./components/motion/motion-control/surge-sway-yaw/vertical-resize-false";
import { MotionMotionControlSurgeSwayYawVerticalResizeInputOutput } from "./components/motion/motion-control/surge-sway-yaw/vertical-resize-input-output";
import { MotionMotionControlDraftTrim } from "./components/motion/motion-control/draft-trim";
import { MotionMotionControlDraftTrimPriorityFalse } from "./components/motion/motion-control/draft-trim/priority-false";
import { MotionMotionControlDraftTrimDraftFore } from "./components/motion/motion-control/draft-trim/draft-fore";
import { MotionMotionControlDraftTrimDraftAft } from "./components/motion/motion-control/draft-trim/draft-aft";
import { MotionMotionControlDraftTrimPriorityEnhanced } from "./components/motion/motion-control/draft-trim/priority-enhanced";
import { MotionMotionControlDraftTrimDraftForeInstance02 } from "./components/motion/motion-control/draft-trim/draft-fore__instance-02";
import { MotionMotionControlDraftTrimDraftAftInstance02 } from "./components/motion/motion-control/draft-trim/draft-aft__instance-02";
import { MotionMotionControlPosPlotBetaTypePointTrail } from "./components/motion/motion-control/pos-plot-beta/type-point-trail";
import { MotionMotionControlPosPlotBetaTypePointTrailWatchFacePitchRollYaw } from "./components/motion/motion-control/pos-plot-beta/type-point-trail/watch-face-pitch-roll-yaw";
import { MotionMotionControlPosPlotBetaTypeSimpleTrail } from "./components/motion/motion-control/pos-plot-beta/type-simple-trail";
import { MotionMotionControlPosPlotBetaTypeSimpleTrailWatchFacePitchRollYaw } from "./components/motion/motion-control/pos-plot-beta/type-simple-trail/watch-face-pitch-roll-yaw";
import { MotionMotionControlPosPlotBetaTypeShipTrail } from "./components/motion/motion-control/pos-plot-beta/type-ship-trail";
import { MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarm } from "./components/motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm";
import { MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarmWatchFacePitchRollYaw } from "./components/motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm/watch-face-pitch-roll-yaw";
import { MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarmWatchFacePitchRollYawInstrument } from "./components/motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm/watch-face-pitch-roll-yaw/instrument";
import { MotionMotionControlPosPlotBetaTypeHdgCog } from "./components/motion/motion-control/pos-plot-beta/type-hdg-cog";
import { MotionMotionControlPosPlotBetaTypeHdgCogTypeTrail } from "./components/motion/motion-control/pos-plot-beta/type-hdg-cog/type-trail";
import { MotionMotionControlPosPlotBetaTypeHdgCogShape } from "./components/motion/motion-control/pos-plot-beta/type-hdg-cog/shape";
import { MotionMotionControlPosPlotBetaTypeCapacityPlot } from "./components/motion/motion-control/pos-plot-beta/type-capacity-plot";
import { MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarm } from "./components/motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm";
import { MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarmWatchFacePitchRollYaw } from "./components/motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm/watch-face-pitch-roll-yaw";
import { MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarmWatchFacePitchRollYawInstrument } from "./components/motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm/watch-face-pitch-roll-yaw/instrument";
import { MotionMotionControlPosPlotBetaTypeHeading } from "./components/motion/motion-control/pos-plot-beta/type-heading";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShape } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeInstance02 } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape__instance-02";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShape } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeInstance03 } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape__instance-03";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeInstance02 } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape__instance-02";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeFrameShape } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape/frame-shape";
import { MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeFrameShapeInstance02 } from "./components/motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape/frame-shape__instance-02";
import { MotionForcesSlamming } from "./components/motion/forces/slamming";
import { MotionForcesSlammingStyleEnhanced } from "./components/motion/forces/slamming/style-enhanced";
import { MotionForcesSlammingStyleRegular } from "./components/motion/forces/slamming/style-regular";
import { MotionForcesVibrations } from "./components/motion/forces/vibrations";
import { MotionForcesVibrationsStyleRegular } from "./components/motion/forces/vibrations/style-regular";
import { MotionForcesVibrationsStyleEnhanced } from "./components/motion/forces/vibrations/style-enhanced";
import { Motion6DofPitchTypeSingleScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/pitch/type-single-scale-style-regular-has-readout-false";
import { Motion6DofPitchThickness } from "./components/motion/6-dof/pitch/thickness";
import { Motion6DofPitchTypeSingleScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/pitch/type-single-scale-style-regular-has-readout-true";
import { Motion6DofPitchThicknessInstance02 } from "./components/motion/6-dof/pitch/thickness__instance-02";
import { Motion6DofPitchTypeDualScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/pitch/type-dual-scale-style-regular-has-readout-false";
import { Motion6DofPitchThicknessInstance03 } from "./components/motion/6-dof/pitch/thickness__instance-03";
import { Motion6DofPitchThicknessInstance04 } from "./components/motion/6-dof/pitch/thickness__instance-04";
import { Motion6DofPitchTypeDualScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/pitch/type-dual-scale-style-regular-has-readout-true";
import { Motion6DofPitchThicknessInstance05 } from "./components/motion/6-dof/pitch/thickness__instance-05";
import { Motion6DofPitchThicknessInstance06 } from "./components/motion/6-dof/pitch/thickness__instance-06";
import { Motion6DofPitchTypeDualScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/pitch/type-dual-scale-style-enhanced-has-readout-false";
import { Motion6DofPitchThicknessInstance07 } from "./components/motion/6-dof/pitch/thickness__instance-07";
import { Motion6DofPitchThicknessInstance08 } from "./components/motion/6-dof/pitch/thickness__instance-08";
import { Motion6DofPitchTypeDualScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/pitch/type-dual-scale-style-enhanced-has-readout-true";
import { Motion6DofPitchThicknessInstance09 } from "./components/motion/6-dof/pitch/thickness__instance-09";
import { Motion6DofPitchThicknessInstance10 } from "./components/motion/6-dof/pitch/thickness__instance-10";
import { Motion6DofPitchTypeSingleScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/pitch/type-single-scale-style-enhanced-has-readout-false";
import { Motion6DofPitchThicknessInstance11 } from "./components/motion/6-dof/pitch/thickness__instance-11";
import { Motion6DofPitchTypeSingleScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/pitch/type-single-scale-style-enhanced-has-readout-true";
import { Motion6DofPitchThicknessInstance12 } from "./components/motion/6-dof/pitch/thickness__instance-12";
import { Motion6DofPitchRollTypeDualScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/pitch-roll/type-dual-scale-style-regular-has-readout-false";
import { Motion6DofPitchRollThickness } from "./components/motion/6-dof/pitch-roll/thickness";
import { Motion6DofPitchRollThicknessInstance02 } from "./components/motion/6-dof/pitch-roll/thickness__instance-02";
import { Motion6DofPitchRollTypeDualScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/pitch-roll/type-dual-scale-style-regular-has-readout-true";
import { Motion6DofPitchRollThicknessInstance03 } from "./components/motion/6-dof/pitch-roll/thickness__instance-03";
import { Motion6DofPitchRollThicknessInstance04 } from "./components/motion/6-dof/pitch-roll/thickness__instance-04";
import { Motion6DofPitchRollTypeDualScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/pitch-roll/type-dual-scale-style-enhanced-has-readout-false";
import { Motion6DofPitchRollThicknessInstance05 } from "./components/motion/6-dof/pitch-roll/thickness__instance-05";
import { Motion6DofPitchRollThicknessInstance06 } from "./components/motion/6-dof/pitch-roll/thickness__instance-06";
import { Motion6DofPitchRollTypeDualScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/pitch-roll/type-dual-scale-style-enhanced-has-readout-true";
import { Motion6DofPitchRollThicknessInstance07 } from "./components/motion/6-dof/pitch-roll/thickness__instance-07";
import { Motion6DofPitchRollThicknessInstance08 } from "./components/motion/6-dof/pitch-roll/thickness__instance-08";
import { Motion6DofPitchRollTypeSingleScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/pitch-roll/type-single-scale-style-regular-has-readout-false";
import { Motion6DofPitchRollThicknessInstance09 } from "./components/motion/6-dof/pitch-roll/thickness__instance-09";
import { Motion6DofPitchRollTypeSingleScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/pitch-roll/type-single-scale-style-regular-has-readout-true";
import { Motion6DofPitchRollThicknessInstance10 } from "./components/motion/6-dof/pitch-roll/thickness__instance-10";
import { Motion6DofPitchRollTypeSingleScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/pitch-roll/type-single-scale-style-enhanced-has-readout-false";
import { Motion6DofPitchRollThicknessInstance11 } from "./components/motion/6-dof/pitch-roll/thickness__instance-11";
import { Motion6DofPitchRollTypeSingleScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/pitch-roll/type-single-scale-style-enhanced-has-readout-true";
import { Motion6DofPitchRollThicknessInstance12 } from "./components/motion/6-dof/pitch-roll/thickness__instance-12";
import { Motion6DofPitchRollHeaveTypeDualScaleStyleRegular } from "./components/motion/6-dof/pitch-roll-heave/type-dual-scale-style-regular";
import { Motion6DofPitchRollHeaveThickness } from "./components/motion/6-dof/pitch-roll-heave/thickness";
import { Motion6DofPitchRollHeaveThicknessInstance02 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-02";
import { Motion6DofPitchRollHeaveTypeDualScaleStyleEnhanced } from "./components/motion/6-dof/pitch-roll-heave/type-dual-scale-style-enhanced";
import { Motion6DofPitchRollHeaveThicknessInstance03 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-03";
import { Motion6DofPitchRollHeaveThicknessInstance04 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-04";
import { Motion6DofPitchRollHeaveTypeSingleScaleStyleRegular } from "./components/motion/6-dof/pitch-roll-heave/type-single-scale-style-regular";
import { Motion6DofPitchRollHeaveThicknessInstance05 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-05";
import { Motion6DofPitchRollHeaveTypeReadoutStyleRegular } from "./components/motion/6-dof/pitch-roll-heave/type-readout-style-regular";
import { Motion6DofPitchRollHeaveThicknessInstance06 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-06";
import { Motion6DofPitchRollHeaveTypeReadoutStyleEnhanced } from "./components/motion/6-dof/pitch-roll-heave/type-readout-style-enhanced";
import { Motion6DofPitchRollHeaveThicknessInstance07 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-07";
import { Motion6DofPitchRollHeaveTypeSingleScaleStyleEnhanced } from "./components/motion/6-dof/pitch-roll-heave/type-single-scale-style-enhanced";
import { Motion6DofPitchRollHeaveThicknessInstance08 } from "./components/motion/6-dof/pitch-roll-heave/thickness__instance-08";
import { Motion6DofHeave } from "./components/motion/6-dof/heave";
import { Motion6DofHeaveTypeBarStyleEnhanced } from "./components/motion/6-dof/heave/type-bar-style-enhanced";
import { Motion6DofHeaveTypeVesselStyleEnhanced } from "./components/motion/6-dof/heave/type-vessel-style-enhanced";
import { Motion6DofHeaveWatchFaceHeave } from "./components/motion/6-dof/heave/watch-face-heave";
import { Motion6DofHeaveWatchFaceHeaveHeaveBar } from "./components/motion/6-dof/heave/watch-face-heave/heave-bar";
import { Motion6DofHeaveTypeVesselStyleRegular } from "./components/motion/6-dof/heave/type-vessel-style-regular";
import { Motion6DofHeaveWatchFaceHeaveInstance02 } from "./components/motion/6-dof/heave/watch-face-heave__instance-02";
import { Motion6DofHeaveWatchFaceHeaveHeaveBarInstance02 } from "./components/motion/6-dof/heave/watch-face-heave/heave-bar__instance-02";
import { Motion6DofHeaveWatchFaceHeaveHeaveBarTypeBarStyleRegular } from "./components/motion/6-dof/heave/watch-face-heave/heave-bar/type-bar-style-regular";
import { Motion6DofRollTypeSingleScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/roll/type-single-scale-style-enhanced-has-readout-false";
import { Motion6DofRollThickness } from "./components/motion/6-dof/roll/thickness";
import { Motion6DofRollTypeSingleScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/roll/type-single-scale-style-regular-has-readout-false";
import { Motion6DofRollThicknessInstance02 } from "./components/motion/6-dof/roll/thickness__instance-02";
import { Motion6DofRollTypeSingleScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/roll/type-single-scale-style-regular-has-readout-true";
import { Motion6DofRollThicknessInstance03 } from "./components/motion/6-dof/roll/thickness__instance-03";
import { Motion6DofRollTypeSingleScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/roll/type-single-scale-style-enhanced-has-readout-true";
import { Motion6DofRollThicknessInstance04 } from "./components/motion/6-dof/roll/thickness__instance-04";
import { Motion6DofRollTypeDualScaleStyleRegularHasReadoutFalse } from "./components/motion/6-dof/roll/type-dual-scale-style-regular-has-readout-false";
import { Motion6DofRollThicknessInstance05 } from "./components/motion/6-dof/roll/thickness__instance-05";
import { Motion6DofRollThicknessInstance06 } from "./components/motion/6-dof/roll/thickness__instance-06";
import { Motion6DofRollTypeDualScaleStyleRegularHasReadoutTrue } from "./components/motion/6-dof/roll/type-dual-scale-style-regular-has-readout-true";
import { Motion6DofRollThicknessInstance07 } from "./components/motion/6-dof/roll/thickness__instance-07";
import { Motion6DofRollThicknessInstance08 } from "./components/motion/6-dof/roll/thickness__instance-08";
import { Motion6DofRollTypeDualScaleStyleEnhancedHasReadoutFalse } from "./components/motion/6-dof/roll/type-dual-scale-style-enhanced-has-readout-false";
import { Motion6DofRollThicknessInstance09 } from "./components/motion/6-dof/roll/thickness__instance-09";
import { Motion6DofRollThicknessInstance10 } from "./components/motion/6-dof/roll/thickness__instance-10";
import { Motion6DofRollTypeDualScaleStyleEnhancedHasReadoutTrue } from "./components/motion/6-dof/roll/type-dual-scale-style-enhanced-has-readout-true";
import { Motion6DofRollThicknessInstance11 } from "./components/motion/6-dof/roll/thickness__instance-11";
import { Motion6DofRollThicknessInstance12 } from "./components/motion/6-dof/roll/thickness__instance-12";
import { Motion6DofRollDocumentationText } from "./components/motion/6-dof/roll/documentation-text";
import { Motion6DofPitchRollYawTypeLevelStyleRegular } from "./components/motion/6-dof/pitch-roll-yaw/type-level-style-regular";
import { Motion6DofPitchRollYawBarArea } from "./components/motion/6-dof/pitch-roll-yaw/bar-area";
import { Motion6DofPitchRollYawTypeLevelStyleEnhanced } from "./components/motion/6-dof/pitch-roll-yaw/type-level-style-enhanced";
import { Motion6DofPitchRollYawBarAreaInstance02 } from "./components/motion/6-dof/pitch-roll-yaw/bar-area__instance-02";
import { Motion6DofPitchRollYawTypeActualMotionStyleRegular } from "./components/motion/6-dof/pitch-roll-yaw/type-actual-motion-style-regular";
import { Motion6DofPitchRollYawBarAreaInstance03 } from "./components/motion/6-dof/pitch-roll-yaw/bar-area__instance-03";
import { Motion6DofPitchRollYawTypeActualMotionStyleEnhanced } from "./components/motion/6-dof/pitch-roll-yaw/type-actual-motion-style-enhanced";
import { Motion6DofPitchRollYawBarAreaInstance04 } from "./components/motion/6-dof/pitch-roll-yaw/bar-area__instance-04";
import { Motion6DofPitchRollYawTypeHistoricalOtionStyleRegular } from "./components/motion/6-dof/pitch-roll-yaw/type-historical-otion-style-regular";
import { Motion6DofPitchRollYawBarAreaInstance05 } from "./components/motion/6-dof/pitch-roll-yaw/bar-area__instance-05";
import { Motion6DofPitchRollYawTypeHistoricalOtionStyleEnhanced } from "./components/motion/6-dof/pitch-roll-yaw/type-historical-otion-style-enhanced";
import { Motion6DofPitchRollYawBarAreaInstance06 } from "./components/motion/6-dof/pitch-roll-yaw/bar-area__instance-06";
import { Motion6DofAttitudeIndicatorStyleRegularPriorityRegular } from "./components/motion/6-dof/attitude-indicator/style-regular-priority-regular";
import { Motion6DofAttitudeIndicatorStyleStyle4PriorityEnhanced } from "./components/motion/6-dof/attitude-indicator/style-style4-priority-enhanced";
import { Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityRegular } from "./components/motion/6-dof/attitude-indicator/style-speed-depth-priority-regular";
import { Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityRegularThickness } from "./components/motion/6-dof/attitude-indicator/style-speed-depth-priority-regular/thickness";
import { Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityEnhanced } from "./components/motion/6-dof/attitude-indicator/style-speed-depth-priority-enhanced";
import { Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityEnhancedThickness } from "./components/motion/6-dof/attitude-indicator/style-speed-depth-priority-enhanced/thickness";
import { PropulsionAzimuthThrusterStateFalsePriorityRegular } from "./components/propulsion/azimuth-thruster/state-false-priority-regular";
import { PropulsionAzimuthThrusterStateFalsePriorityInCommand } from "./components/propulsion/azimuth-thruster/state-false-priority-in-command";
import { PropulsionAzimuthThrusterStateInputChangePriorityRegular } from "./components/propulsion/azimuth-thruster/state-input-change-priority-regular";
import { PropulsionAzimuthThrusterStateInputChangePriorityInCommand } from "./components/propulsion/azimuth-thruster/state-input-change-priority-in-command";
import { PropulsionAzimuthThrusterStateReadyPriorityRegular } from "./components/propulsion/azimuth-thruster/state-ready-priority-regular";
import { PropulsionAzimuthThrusterStateReadyPriorityInCommand } from "./components/propulsion/azimuth-thruster/state-ready-priority-in-command";
import { PropulsionAzimuthThrusterStateLoadingPriorityRegular } from "./components/propulsion/azimuth-thruster/state-loading-priority-regular";
import { PropulsionAzimuthThrusterStateLoadingPriorityInCommand } from "./components/propulsion/azimuth-thruster/state-loading-priority-in-command";
import { PropulsionAzimuthThrusterStateOffPriorityRegular } from "./components/propulsion/azimuth-thruster/state-off-priority-regular";
import { PropulsionAzimuthThrusterStateOffPriorityInCommand } from "./components/propulsion/azimuth-thruster/state-off-priority-in-command";
import { PropulsionAzimuthThrusterDocumentationText } from "./components/propulsion/azimuth-thruster/documentation-text";
import { PropulsionTunnelThrusterPriorityRegularStyleBarStateActive } from "./components/propulsion/tunnel-thruster/priority-regular-style-bar-state-active";
import { PropulsionTunnelThrusterPriorityRegularStyleBarStateInput } from "./components/propulsion/tunnel-thruster/priority-regular-style-bar-state-input";
import { PropulsionTunnelThrusterPriorityRegularStyleBarStateReady } from "./components/propulsion/tunnel-thruster/priority-regular-style-bar-state-ready";
import { PropulsionTunnelThrusterPriorityRegularStyleBarStateLoading } from "./components/propulsion/tunnel-thruster/priority-regular-style-bar-state-loading";
import { PropulsionTunnelThrusterPriorityRegularStyleBarStateOff } from "./components/propulsion/tunnel-thruster/priority-regular-style-bar-state-off";
import { PropulsionTunnelThrusterPriorityInCommandStyleBarStateActive } from "./components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-active";
import { PropulsionTunnelThrusterPriorityInCommandStyleBarStateInput } from "./components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-input";
import { PropulsionTunnelThrusterPriorityInCommandStyleBarStateReady } from "./components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-ready";
import { PropulsionTunnelThrusterPriorityInCommandStyleBarStateLoading } from "./components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-loading";
import { PropulsionTunnelThrusterPriorityInCommandStyleBarStateOff } from "./components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-off";
import { PropulsionTunnelThrusterPriorityRegularStylePropellarStateActive } from "./components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-active";
import { PropulsionTunnelThrusterPriorityRegularStylePropellarStateInput } from "./components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-input";
import { PropulsionTunnelThrusterPriorityRegularStylePropellarStateReady } from "./components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-ready";
import { PropulsionTunnelThrusterPriorityRegularStylePropellarStateLoading } from "./components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-loading";
import { PropulsionTunnelThrusterPriorityRegularStylePropellarStateOff } from "./components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-off";
import { PropulsionTunnelThrusterPriorityInCommandStylePropellarStateActive } from "./components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-active";
import { PropulsionTunnelThrusterPriorityInCommandStylePropellarStateInput } from "./components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-input";
import { PropulsionTunnelThrusterPriorityInCommandStylePropellarStateReady } from "./components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-ready";
import { PropulsionTunnelThrusterPriorityInCommandStylePropellarStateLoading } from "./components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-loading";
import { PropulsionTunnelThrusterPriorityInCommandStylePropellarStateOff } from "./components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-off";
import { PropulsionTunnelThrusterDocumentationText } from "./components/propulsion/tunnel-thruster/documentation-text";
import { PropulsionWindPropulsion } from "./components/propulsion/wind-propulsion";
import { PropulsionWindPropulsionPriorityEnhancedForceResultant } from "./components/propulsion/wind-propulsion/priority-enhanced-force-resultant";
import { PropulsionWindPropulsionPriorityEnhancedForceSplit } from "./components/propulsion/wind-propulsion/priority-enhanced-force-split";
import { PropulsionWindPropulsionPriorityEnhancedForceSideThrust } from "./components/propulsion/wind-propulsion/priority-enhanced-force-side-thrust";
import { PropulsionRudderPriorityInCommandStyleRudderStateActive } from "./components/propulsion/rudder/priority-in-command-style-rudder-state-active";
import { PropulsionRudderPriorityRegularStyleRudderStateActive } from "./components/propulsion/rudder/priority-regular-style-rudder-state-active";
import { PropulsionRudderPriorityRegularStyleRudderStateInput } from "./components/propulsion/rudder/priority-regular-style-rudder-state-input";
import { PropulsionRudderPriorityInCommandStyleRudderStateInput } from "./components/propulsion/rudder/priority-in-command-style-rudder-state-input";
import { PropulsionRudderPriorityRegularStyleRudderStateReady } from "./components/propulsion/rudder/priority-regular-style-rudder-state-ready";
import { PropulsionRudderPriorityInCommandStyleRudderStateReady } from "./components/propulsion/rudder/priority-in-command-style-rudder-state-ready";
import { PropulsionRudderPriorityRegularStyleRudderStateLoading } from "./components/propulsion/rudder/priority-regular-style-rudder-state-loading";
import { PropulsionRudderPriorityInCommandStyleRudderStateLoading } from "./components/propulsion/rudder/priority-in-command-style-rudder-state-loading";
import { PropulsionRudderPriorityRegularStyleRudderStateOff } from "./components/propulsion/rudder/priority-regular-style-rudder-state-off";
import { PropulsionRudderPriorityInCommandStyleRudderStateOff } from "./components/propulsion/rudder/priority-in-command-style-rudder-state-off";
import { PropulsionRudderPriorityRegularStyleBarStateActive } from "./components/propulsion/rudder/priority-regular-style-bar-state-active";
import { PropulsionRudderPriorityInCommandStyleBarStateActive } from "./components/propulsion/rudder/priority-in-command-style-bar-state-active";
import { PropulsionRudderPriorityRegularStyleBarStateReady } from "./components/propulsion/rudder/priority-regular-style-bar-state-ready";
import { PropulsionRudderPriorityInCommandStyleBarStateReady } from "./components/propulsion/rudder/priority-in-command-style-bar-state-ready";
import { PropulsionRudderPriorityRegularStyleBarStateLoading } from "./components/propulsion/rudder/priority-regular-style-bar-state-loading";
import { PropulsionRudderPriorityInCommandStyleBarStateLoading } from "./components/propulsion/rudder/priority-in-command-style-bar-state-loading";
import { PropulsionRudderPriorityRegularStyleBarStateOff } from "./components/propulsion/rudder/priority-regular-style-bar-state-off";
import { PropulsionRudderPriorityInCommandStyleBarStateOff } from "./components/propulsion/rudder/priority-in-command-style-bar-state-off";
import { PropulsionRudderPriorityRegularStyleBarStateInput } from "./components/propulsion/rudder/priority-regular-style-bar-state-input";
import { PropulsionRudderPriorityInCommandStyleBarStateInput } from "./components/propulsion/rudder/priority-in-command-style-bar-state-input";
import { PropulsionRudderDocumentationText } from "./components/propulsion/rudder/documentation-text";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateActive } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-active";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateActive } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-active";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateInput } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-input";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateInput } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-input";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateReady } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-ready";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateReady } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-ready";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateLoading } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-loading";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateLoading } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-loading";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateOff } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-off";
import { PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateOff } from "./components/propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-off";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateActive } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-active";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateActive } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-active";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateInput } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-input";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateInput } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-input";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateReady } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-ready";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateReady } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-ready";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateLoading } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-loading";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateLoading } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-loading";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateOff } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-off";
import { PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateOff } from "./components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-off";
import { PropulsionMainEngineStyleBarTypePowerPriorityRegularStateActive } from "./components/propulsion/main-engine/style-bar-type-power-priority-regular-state-active";
import { PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateActive } from "./components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-active";
import { PropulsionMainEngineStyleBarTypePowerPriorityRegularStateInput } from "./components/propulsion/main-engine/style-bar-type-power-priority-regular-state-input";
import { PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateInput } from "./components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-input";
import { PropulsionMainEngineStyleBarTypePowerPriorityRegularStateReady } from "./components/propulsion/main-engine/style-bar-type-power-priority-regular-state-ready";
import { PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateReady } from "./components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-ready";
import { PropulsionMainEngineStyleBarTypePowerPriorityRegularStateLoading } from "./components/propulsion/main-engine/style-bar-type-power-priority-regular-state-loading";
import { PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateLoading } from "./components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-loading";
import { PropulsionMainEngineStyleBarTypePowerPriorityRegularStateOff } from "./components/propulsion/main-engine/style-bar-type-power-priority-regular-state-off";
import { PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateOff } from "./components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-off";
import { PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateActive } from "./components/propulsion/main-engine/style-propellar-type-power-priority-regular-state-active";
import { PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateActive } from "./components/propulsion/main-engine/style-propellar-type-power-priority-in-command-state-active";
import { PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateInput } from "./components/propulsion/main-engine/style-propellar-type-power-priority-regular-state-input";
import { PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateInput } from "./components/propulsion/main-engine/style-propellar-type-power-priority-in-command-state-input";
import { PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateReady } from "./components/propulsion/main-engine/style-propellar-type-power-priority-regular-state-ready";
import { PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateReady } from "./components/propulsion/main-engine/style-propellar-type-power-priority-in-command-state-ready";
import { PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateLoading } from "./components/propulsion/main-engine/style-propellar-type-power-priority-regular-state-loading";
import { PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateLoading } from "./components/propulsion/main-engine/style-propellar-type-power-priority-in-command-state-loading";
import { PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateOff } from "./components/propulsion/main-engine/style-propellar-type-power-priority-regular-state-off";
import { PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateOff } from "./components/propulsion/main-engine/style-propellar-type-power-priority-in-command-state-off";
import { PropulsionMainEngineDocumentationText } from "./components/propulsion/main-engine/documentation-text";
import { NavigationCompassCompassLinear } from "./components/navigation/compass/compass-linear";
import { NavigationCompassCompassLinearHasReadoutFalseStyleRegular } from "./components/navigation/compass/compass-linear/has-readout-false-style-regular";
import { NavigationCompassCompassLinearHasReadoutFalseStyleEnhanced } from "./components/navigation/compass/compass-linear/has-readout-false-style-enhanced";
import { NavigationCompassCompassLinearHasReadoutTrueStyleRegular } from "./components/navigation/compass/compass-linear/has-readout-true-style-regular";
import { NavigationCompassCompassLinearHasReadoutTrueStyleEnhanced } from "./components/navigation/compass/compass-linear/has-readout-true-style-enhanced";
import { NavigationCompassCompassRadialTypeRegularPriorityEnhanced } from "./components/navigation/compass/compass-radial/type-regular-priority-enhanced";
import { NavigationCompassCompassRadialTypeEnvironmentDataPriorityEnhanced } from "./components/navigation/compass/compass-radial/type-environment-data-priority-enhanced";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhanced } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-enhanced";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhancedBarArea } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-enhanced/bar-area";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhancedShape } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-enhanced/shape";
import { NavigationCompassCompassRadialTypeCenterLabelPriorityEnhanced } from "./components/navigation/compass/compass-radial/type-center-label-priority-enhanced";
import { NavigationCompassCompassRadialTypeRegularPriorityRegular } from "./components/navigation/compass/compass-radial/type-regular-priority-regular";
import { NavigationCompassCompassRadialTypeEnvironmentDataPriorityRegular } from "./components/navigation/compass/compass-radial/type-environment-data-priority-regular";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityRegular } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-regular";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityRegularBarArea } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-regular/bar-area";
import { NavigationCompassCompassRadialTypeMapGraphicsPriorityRegularShape } from "./components/navigation/compass/compass-radial/type-map-graphics-priority-regular/shape";
import { NavigationCompassCompassRadialTypeCenterLabelPriorityRegular } from "./components/navigation/compass/compass-radial/type-center-label-priority-regular";
import { NavigationCompassCompassSector } from "./components/navigation/compass/compass-sector";
import { NavigationCompassCompassSectorStyleRegularHasReadoutFalse } from "./components/navigation/compass/compass-sector/style-regular-has-readout-false";
import { NavigationCompassCompassSectorBarArea } from "./components/navigation/compass/compass-sector/bar-area";
import { NavigationCompassCompassSectorStyleRegularHasReadoutTrue } from "./components/navigation/compass/compass-sector/style-regular-has-readout-true";
import { NavigationCompassCompassSectorBarAreaInstance02 } from "./components/navigation/compass/compass-sector/bar-area__instance-02";
import { NavigationCompassCompassSectorStyleEnhancedHasReadoutTrue } from "./components/navigation/compass/compass-sector/style-enhanced-has-readout-true";
import { NavigationCompassCompassSectorBarAreaInstance03 } from "./components/navigation/compass/compass-sector/bar-area__instance-03";
import { NavigationCompassCompassSectorStyleEnhancedHasReadoutFalse } from "./components/navigation/compass/compass-sector/style-enhanced-has-readout-false";
import { NavigationCompassCompassSectorBarAreaInstance04 } from "./components/navigation/compass/compass-sector/bar-area__instance-04";
import { NavigationCompassCompassSectorDocumentationText } from "./components/navigation/compass/compass-sector/documentation-text";
import { NavigationRateOfTurnRotSector } from "./components/navigation/rate-of-turn/rot-sector";
import { NavigationRateOfTurnRotSectorStyleRegularCenterLabelFalse } from "./components/navigation/rate-of-turn/rot-sector/style-regular-center-label-false";
import { NavigationRateOfTurnRotSectorStyleEnhancedCenterLabelFalse } from "./components/navigation/rate-of-turn/rot-sector/style-enhanced-center-label-false";
import { NavigationRateOfTurnRotSectorStylePortStbdCenterLabelFalse } from "./components/navigation/rate-of-turn/rot-sector/style-port-stbd-center-label-false";
import { NavigationRateOfTurnRotSectorStyleRegularCenterLabelTrue } from "./components/navigation/rate-of-turn/rot-sector/style-regular-center-label-true";
import { NavigationRateOfTurnRotSectorStyleEnhancedCenterLabelTrue } from "./components/navigation/rate-of-turn/rot-sector/style-enhanced-center-label-true";
import { NavigationRateOfTurnRotSectorStylePortStbdCenterLabelTrue } from "./components/navigation/rate-of-turn/rot-sector/style-port-stbd-center-label-true";
import { NavigationRateOfTurnRotSectorDocumentationText } from "./components/navigation/rate-of-turn/rot-sector/documentation-text";
import { NavigationRateOfTurnRotRadial } from "./components/navigation/rate-of-turn/rot-radial";
import { NavigationRateOfTurnRotRadialTypeDotsStyleRegular } from "./components/navigation/rate-of-turn/rot-radial/type-dots-style-regular";
import { NavigationRateOfTurnRotRadialTypeDotsStyleEnhanced } from "./components/navigation/rate-of-turn/rot-radial/type-dots-style-enhanced";
import { NavigationRateOfTurnRotRadialTypeDotsStylePortStbd } from "./components/navigation/rate-of-turn/rot-radial/type-dots-style-port-stbd";
import { NavigationRateOfTurnRotRadialTypeBarStyleRegular } from "./components/navigation/rate-of-turn/rot-radial/type-bar-style-regular";
import { NavigationRateOfTurnRotRadialTypeBarStyleEnhanced } from "./components/navigation/rate-of-turn/rot-radial/type-bar-style-enhanced";
import { NavigationRateOfTurnRotRadialTypeBarStylePortStbd } from "./components/navigation/rate-of-turn/rot-radial/type-bar-style-port-stbd";
import { NavigationRateOfTurnRotLinear } from "./components/navigation/rate-of-turn/rot-linear";
import { NavigationRateOfTurnRotLinearTypeBarStyleRegular } from "./components/navigation/rate-of-turn/rot-linear/type-bar-style-regular";
import { NavigationRateOfTurnRotLinearTypeBarStylePortStbd } from "./components/navigation/rate-of-turn/rot-linear/type-bar-style-port-stbd";
import { NavigationRateOfTurnRotLinearTypeBarStyleEnhaced } from "./components/navigation/rate-of-turn/rot-linear/type-bar-style-enhaced";
import { NavigationRateOfTurnRotLinearTypeBarReadoutStyleRegular } from "./components/navigation/rate-of-turn/rot-linear/type-bar-readout-style-regular";
import { NavigationRateOfTurnRotLinearTypeBarReadoutStylePortStbd } from "./components/navigation/rate-of-turn/rot-linear/type-bar-readout-style-port-stbd";
import { NavigationRateOfTurnRotLinearTypeBarReadoutStyleEnhaced } from "./components/navigation/rate-of-turn/rot-linear/type-bar-readout-style-enhaced";
import { NavigationHeadingHeadingRadialTypeRegularScalingProportionalPriorityEnhanced } from "./components/navigation/heading/heading-radial/type-regular-scaling-proportional-priority-enhanced";
import { NavigationHeadingHeadingRadialTypeRegularScalingProportionalPriorityRegular } from "./components/navigation/heading/heading-radial/type-regular-scaling-proportional-priority-regular";
import { NavigationHeadingHeadingRadialTypeVesselTypeScalingProportionalPriorityRegular } from "./components/navigation/heading/heading-radial/type-vessel-type-scaling-proportional-priority-regular";
import { NavigationHeadingHeadingRadialTypeVesselTypeScalingProportionalPriorityEnhanced } from "./components/navigation/heading/heading-radial/type-vessel-type-scaling-proportional-priority-enhanced";
import { NavigationHeadingHeadingRadialTypeCenterLabelScalingProportionalPriorityRegular } from "./components/navigation/heading/heading-radial/type-center-label-scaling-proportional-priority-regular";
import { NavigationHeadingHeadingRadialTypeCenterLabelScalingProportionalPriorityEnhanced } from "./components/navigation/heading/heading-radial/type-center-label-scaling-proportional-priority-enhanced";
import { NavigationHeadingHeadingRadialTypeTrackScalingProportionalPriorityEnhanced } from "./components/navigation/heading/heading-radial/type-track-scaling-proportional-priority-enhanced";
import { NavigationHeadingHeadingRadialShapeInstance08 } from "./components/navigation/heading/heading-radial/shape__instance-08";
import { NavigationHeadingHeadingRadialTypeTrackScalingProportionalPriorityRegular } from "./components/navigation/heading/heading-radial/type-track-scaling-proportional-priority-regular";
import { NavigationHeadingHeadingRadialShapeInstance10 } from "./components/navigation/heading/heading-radial/shape__instance-10";
import { NavigationHeadingHeadingRadialDocumentationText } from "./components/navigation/heading/heading-radial/documentation-text";
import { NavigationHeadingHeadingSector } from "./components/navigation/heading/heading-sector";
import { NavigationHeadingHeadingSectorTypeRegularStyleEnhanced } from "./components/navigation/heading/heading-sector/type-regular-style-enhanced";
import { NavigationHeadingHeadingSectorTypeRegularStyleRegular } from "./components/navigation/heading/heading-sector/type-regular-style-regular";
import { NavigationHeadingHeadingSectorTypeCenterLabelStyleEnhanced } from "./components/navigation/heading/heading-sector/type-center-label-style-enhanced";
import { NavigationHeadingHeadingSectorTypeCenterLabelStyleRegular } from "./components/navigation/heading/heading-sector/type-center-label-style-regular";
import { NavigationHeadingHeadingLinear } from "./components/navigation/heading/heading-linear";
import { NavigationHeadingHeadingLinearTypeBarStyleRegular } from "./components/navigation/heading/heading-linear/type-bar-style-regular";
import { NavigationHeadingHeadingLinearAdvice } from "./components/navigation/heading/heading-linear/advice";
import { NavigationHeadingHeadingLinearTypeXtdStyleRegular } from "./components/navigation/heading/heading-linear/type-xtd-style-regular";
import { NavigationHeadingHeadingLinearTypeXtdStyleEnhanced } from "./components/navigation/heading/heading-linear/type-xtd-style-enhanced";
import { NavigationHeadingHeadingLinearTypeBarStyleEnhanced } from "./components/navigation/heading/heading-linear/type-bar-style-enhanced";
import { NavigationHeadingHeadingLinearAdviceInstance02 } from "./components/navigation/heading/heading-linear/advice__instance-02";
import { NavigationHeadingHeadingLinearAdviceTypeBarReadoutStyleRegular } from "./components/navigation/heading/heading-linear/advice/type-bar-readout-style-regular";
import { NavigationHeadingHeadingLinearAdviceInstance03 } from "./components/navigation/heading/heading-linear/advice__instance-03";
import { NavigationHeadingHeadingLinearTypeBarReadoutStyleEnhanced } from "./components/navigation/heading/heading-linear/type-bar-readout-style-enhanced";
import { NavigationHeadingHeadingLinearAdviceInstance04 } from "./components/navigation/heading/heading-linear/advice__instance-04";
import { NavigationSpeedSpeedArrows } from "./components/navigation/speed/speed-arrows";
import { NavigationSpeedSpeedArrowsLeveled } from "./components/navigation/speed/speed-arrows-leveled";
import { NavigationSpeedSpeedDirectionsDocumentationText } from "./components/navigation/speed/speed-directions/documentation-text";
import { NavigationSpeedSpeedGauge } from "./components/navigation/speed/speed-gauge";
import { NavigationSpeedSpeedGaugeTypeArrowStyleRegular } from "./components/navigation/speed/speed-gauge/type-arrow-style-regular";
import { NavigationSpeedSpeedGaugeTypeArrowStyleEnhanced } from "./components/navigation/speed/speed-gauge/type-arrow-style-enhanced";
import { NavigationSpeedSpeedGaugeTypeBarStyleRegular } from "./components/navigation/speed/speed-gauge/type-bar-style-regular";
import { NavigationSpeedSpeedGaugeTypeBarStyleEnhanced } from "./components/navigation/speed/speed-gauge/type-bar-style-enhanced";
import { NavigationDepthStyleNoneDepthTypeRegular } from "./components/navigation/depth/style-none-depth-type-regular";
import { NavigationDepthStyleNoneDepthTypePrediction } from "./components/navigation/depth/style-none-depth-type-prediction";
import { NavigationDepthStyleCondencedDepthTypePrediction } from "./components/navigation/depth/style-condenced-depth-type-prediction";
import { NavigationDepthStyleVesselScaleDepthTypePrediction } from "./components/navigation/depth/style-vessel-scale-depth-type-prediction";
import { NavigationDepthStyleNoneDepthTypeScanned } from "./components/navigation/depth/style-none-depth-type-scanned";
import { NavigationDepthStyleCondencedDepthTypeScanned } from "./components/navigation/depth/style-condenced-depth-type-scanned";
import { NavigationDepthStyleVesselScaleDepthTypeScanned } from "./components/navigation/depth/style-vessel-scale-depth-type-scanned";
import { NavigationDepthStyleCondencedDepthTypeRegular } from "./components/navigation/depth/style-condenced-depth-type-regular";
import { NavigationDepthStyleVesselScaleDepthTypeRegular } from "./components/navigation/depth/style-vessel-scale-depth-type-regular";
import { NavigationDepthDocumentationText } from "./components/navigation/depth/documentation-text";
import { NavigationDepthDepthActual } from "./components/navigation/depth/depth-actual";
import { NavigationDepthDepthActualTypeShallowStyleRegular } from "./components/navigation/depth/depth-actual/type-shallow-style-regular";
import { NavigationDepthDepthActualTypeShallowStyleEnhanced } from "./components/navigation/depth/depth-actual/type-shallow-style-enhanced";
import { NavigationDepthDepthActualTypeRegularStyleRegular } from "./components/navigation/depth/depth-actual/type-regular-style-regular";
import { NavigationDepthDepthActualTypeRegularStyleEnhanced } from "./components/navigation/depth/depth-actual/type-regular-style-enhanced";
import { NavigationDepthDepthActualTypeDeepStylePortStbd } from "./components/navigation/depth/depth-actual/type-deep-style-port-stbd";
import { NavigationDepthDepthActualTypeDeepStyleEnhanced } from "./components/navigation/depth/depth-actual/type-deep-style-enhanced";
import { ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingHorizontalTextStackingVertical } from "./components/readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-horizontal-text-stacking-vertical";
import { ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingVerticalTextStackingVertical } from "./components/readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-vertical-text-stacking-vertical";
import { ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingHorizontalTextStackingVertical } from "./components/readout/layout-presets/layout-preset/direction-vertical-readout-stacking-horizontal-text-stacking-vertical";
import { ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingVerticalTextStackingHorizontal } from "./components/readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-vertical-text-stacking-horizontal";
import { ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingVerticalTextStackingHorizontal } from "./components/readout/layout-presets/layout-preset/direction-vertical-readout-stacking-vertical-text-stacking-horizontal";
import { ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingVerticalTextStackingVertical } from "./components/readout/layout-presets/layout-preset/direction-vertical-readout-stacking-vertical-text-stacking-vertical";
import { ReadoutLayoutPresetsCenterLabel } from "./components/readout/layout-presets/center-label";
import { ReadoutLayoutPresetsCenterLabelValues3 } from "./components/readout/layout-presets/center-label/values-3";
import { ReadoutLayoutPresetsCenterLabelValues2 } from "./components/readout/layout-presets/center-label/values-2";
import { ReadoutLayoutPresetsCenterLabelValuesPrimarySecondary } from "./components/readout/layout-presets/center-label/values-primary-secondary";
import { ReadoutLayoutPresetsCenterLabelValues1 } from "./components/readout/layout-presets/center-label/values-1";
import { ReadoutLayoutPresetsGaugeReadout } from "./components/readout/layout-presets/gauge-readout";
import { ReadoutReadoutGroup } from "./components/readout/readout-group";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityRegular } from "./components/readout/readout-group/size-large-direction-vertical-priority-regular";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityLowIntegrity } from "./components/readout/readout-group/size-large-direction-vertical-priority-low-integrity";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInvalid } from "./components/readout/readout-group/size-large-direction-vertical-priority-invalid";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityEnhanced } from "./components/readout/readout-group/size-large-direction-vertical-priority-enhanced";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInput } from "./components/readout/readout-group/size-large-direction-vertical-priority-input";
import { ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInputFlipFlop } from "./components/readout/readout-group/size-large-direction-vertical-priority-input-flip-flop";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityRegular } from "./components/readout/readout-group/size-medium-direction-vertical-priority-regular";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityLowIntegrity } from "./components/readout/readout-group/size-medium-direction-vertical-priority-low-integrity";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInvalid } from "./components/readout/readout-group/size-medium-direction-vertical-priority-invalid";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityEnhanced } from "./components/readout/readout-group/size-medium-direction-vertical-priority-enhanced";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInput } from "./components/readout/readout-group/size-medium-direction-vertical-priority-input";
import { ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInputFlipFlop } from "./components/readout/readout-group/size-medium-direction-vertical-priority-input-flip-flop";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityRegular } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-regular";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityLowIntegrity } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-low-integrity";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInvalid } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-invalid";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityEnhanced } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-enhanced";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInput } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-input";
import { ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInputFlipFlop } from "./components/readout/readout-group/size-medium-direction-horizontal-priority-input-flip-flop";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityRegular } from "./components/readout/readout-group/size-regular-direction-vertical-priority-regular";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityLowIntegrity } from "./components/readout/readout-group/size-regular-direction-vertical-priority-low-integrity";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInvalid } from "./components/readout/readout-group/size-regular-direction-vertical-priority-invalid";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityEnhanced } from "./components/readout/readout-group/size-regular-direction-vertical-priority-enhanced";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInput } from "./components/readout/readout-group/size-regular-direction-vertical-priority-input";
import { ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInputFlipFlop } from "./components/readout/readout-group/size-regular-direction-vertical-priority-input-flip-flop";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityRegular } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-regular";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityLowIntegrity } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-low-integrity";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInvalid } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-invalid";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityEnhanced } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-enhanced";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInput } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-input";
import { ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInputFlipFlop } from "./components/readout/readout-group/size-regular-direction-horizontal-priority-input-flip-flop";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityRegular } from "./components/readout/readout-group/size-large-direction-horizontal-priority-regular";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityLowIntegrity } from "./components/readout/readout-group/size-large-direction-horizontal-priority-low-integrity";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInvalid } from "./components/readout/readout-group/size-large-direction-horizontal-priority-invalid";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityEnhanced } from "./components/readout/readout-group/size-large-direction-horizontal-priority-enhanced";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInput } from "./components/readout/readout-group/size-large-direction-horizontal-priority-input";
import { ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInputFlipFlop } from "./components/readout/readout-group/size-large-direction-horizontal-priority-input-flip-flop";
import { ReadoutReadoutStack } from "./components/readout/readout-stack";
import { ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityRegular } from "./components/readout/readout-stack/size-large-alignment-vertical-priority-regular";
import { ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityLowIntegrity } from "./components/readout/readout-stack/size-large-alignment-vertical-priority-low-integrity";
import { ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityInvalid } from "./components/readout/readout-stack/size-large-alignment-vertical-priority-invalid";
import { ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityEnhanced } from "./components/readout/readout-stack/size-large-alignment-vertical-priority-enhanced";
import { ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityInput } from "./components/readout/readout-stack/size-large-alignment-vertical-priority-input";
import { ReadoutReadoutStackSizeLargeAlignmentLeftPriorityRegular } from "./components/readout/readout-stack/size-large-alignment-left-priority-regular";
import { ReadoutReadoutStackSizeLargeAlignmentLeftPriorityLowIntegrity } from "./components/readout/readout-stack/size-large-alignment-left-priority-low-integrity";
import { ReadoutReadoutStackSizeLargeAlignmentLeftPriorityInvalid } from "./components/readout/readout-stack/size-large-alignment-left-priority-invalid";
import { ReadoutReadoutStackSizeLargeAlignmentLeftPriorityEnhanced } from "./components/readout/readout-stack/size-large-alignment-left-priority-enhanced";
import { ReadoutReadoutStackSizeLargeAlignmentLeftPriorityInput } from "./components/readout/readout-stack/size-large-alignment-left-priority-input";
import { ReadoutReadoutStackSizeLargeAlignmentCenterPriorityRegular } from "./components/readout/readout-stack/size-large-alignment-center-priority-regular";
import { ReadoutReadoutStackSizeLargeAlignmentCenterPriorityLowIntegrity } from "./components/readout/readout-stack/size-large-alignment-center-priority-low-integrity";
import { ReadoutReadoutStackSizeLargeAlignmentCenterPriorityInvalid } from "./components/readout/readout-stack/size-large-alignment-center-priority-invalid";
import { ReadoutReadoutStackSizeLargeAlignmentCenterPriorityEnhanced } from "./components/readout/readout-stack/size-large-alignment-center-priority-enhanced";
import { ReadoutReadoutStackSizeLargeAlignmentCenterPriorityInput } from "./components/readout/readout-stack/size-large-alignment-center-priority-input";
import { ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityRegular } from "./components/readout/readout-stack/size-medium-alignment-vertical-priority-regular";
import { ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityLowIntegrity } from "./components/readout/readout-stack/size-medium-alignment-vertical-priority-low-integrity";
import { ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityInvalid } from "./components/readout/readout-stack/size-medium-alignment-vertical-priority-invalid";
import { ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityEnhanced } from "./components/readout/readout-stack/size-medium-alignment-vertical-priority-enhanced";
import { ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityInput } from "./components/readout/readout-stack/size-medium-alignment-vertical-priority-input";
import { ReadoutReadoutStackSizeMediumAlignmentLeftPriorityRegular } from "./components/readout/readout-stack/size-medium-alignment-left-priority-regular";
import { ReadoutReadoutStackSizeMediumAlignmentLeftPriorityLowIntegrity } from "./components/readout/readout-stack/size-medium-alignment-left-priority-low-integrity";
import { ReadoutReadoutStackSizeMediumAlignmentLeftPriorityInvalid } from "./components/readout/readout-stack/size-medium-alignment-left-priority-invalid";
import { ReadoutReadoutStackSizeMediumAlignmentLeftPriorityEnhanced } from "./components/readout/readout-stack/size-medium-alignment-left-priority-enhanced";
import { ReadoutReadoutStackSizeMediumAlignmentLeftPriorityInput } from "./components/readout/readout-stack/size-medium-alignment-left-priority-input";
import { ReadoutReadoutStackSizeMediumAlignmentCenterPriorityRegular } from "./components/readout/readout-stack/size-medium-alignment-center-priority-regular";
import { ReadoutReadoutStackSizeMediumAlignmentCenterPriorityLowIntegrity } from "./components/readout/readout-stack/size-medium-alignment-center-priority-low-integrity";
import { ReadoutReadoutStackSizeMediumAlignmentCenterPriorityInvalid } from "./components/readout/readout-stack/size-medium-alignment-center-priority-invalid";
import { ReadoutReadoutStackSizeMediumAlignmentCenterPriorityEnhanced } from "./components/readout/readout-stack/size-medium-alignment-center-priority-enhanced";
import { ReadoutReadoutStackSizeMediumAlignmentCenterPriorityInput } from "./components/readout/readout-stack/size-medium-alignment-center-priority-input";
import { ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityRegular } from "./components/readout/readout-stack/size-regular-alignment-vertical-priority-regular";
import { ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityLowIntegrity } from "./components/readout/readout-stack/size-regular-alignment-vertical-priority-low-integrity";
import { ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityInvalid } from "./components/readout/readout-stack/size-regular-alignment-vertical-priority-invalid";
import { ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityEnhanced } from "./components/readout/readout-stack/size-regular-alignment-vertical-priority-enhanced";
import { ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityInput } from "./components/readout/readout-stack/size-regular-alignment-vertical-priority-input";
import { ReadoutReadoutStackSizeRegularAlignmentLeftPriorityRegular } from "./components/readout/readout-stack/size-regular-alignment-left-priority-regular";
import { ReadoutReadoutStackSizeRegularAlignmentLeftPriorityLowIntegrity } from "./components/readout/readout-stack/size-regular-alignment-left-priority-low-integrity";
import { ReadoutReadoutStackSizeRegularAlignmentLeftPriorityInvalid } from "./components/readout/readout-stack/size-regular-alignment-left-priority-invalid";
import { ReadoutReadoutStackSizeRegularAlignmentLeftPriorityEnhanced } from "./components/readout/readout-stack/size-regular-alignment-left-priority-enhanced";
import { ReadoutReadoutStackSizeRegularAlignmentLeftPriorityInput } from "./components/readout/readout-stack/size-regular-alignment-left-priority-input";
import { ReadoutReadoutStackSizeRegularAlignmentCenterPriorityRegular } from "./components/readout/readout-stack/size-regular-alignment-center-priority-regular";
import { ReadoutReadoutStackSizeRegularAlignmentCenterPriorityLowIntegrity } from "./components/readout/readout-stack/size-regular-alignment-center-priority-low-integrity";
import { ReadoutReadoutStackSizeRegularAlignmentCenterPriorityInvalid } from "./components/readout/readout-stack/size-regular-alignment-center-priority-invalid";
import { ReadoutReadoutStackSizeRegularAlignmentCenterPriorityEnhanced } from "./components/readout/readout-stack/size-regular-alignment-center-priority-enhanced";
import { ReadoutReadoutStackSizeRegularAlignmentCenterPriorityInput } from "./components/readout/readout-stack/size-regular-alignment-center-priority-input";
import { ReadoutReadoutListItem } from "./components/readout/readout-list-item";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityRegular } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-regular";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-invalid";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInput } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-input";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-base-unit-position-trailing-priority-input-flip-flop";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityRegular } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-regular";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-invalid";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInput } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-input";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-input-flip-flop";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityRegular } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-regular";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-invalid";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInput } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-input";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-input-flip-flop";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityRegular } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-regular";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-invalid";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInput } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-input";
import { ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-base-unit-position-leading-priority-input-flip-flop";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityRegular } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-regular";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-invalid";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInput } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-input";
import { ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-priority-unit-position-leading-priority-input-flip-flop";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityRegular } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-regular";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityLowIntegrity } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-low-integrity";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInvalid } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-invalid";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityEnhanced } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-enhanced";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInput } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-input";
import { ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInputFlipFlop } from "./components/readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-input-flip-flop";

export const openBridgeAssetRegistry = {
  "building-blocks/compass/config-compass-radial-advice-optimal": { component: BuildingBlocksCompassConfigCompassRadialAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/compass/config-compass-arc-advice-optimal": { component: BuildingBlocksCompassConfigCompassArcAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/compass/config-compass-radial-advice-danger": { component: BuildingBlocksCompassConfigCompassRadialAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/compass/config-compass-arc-advice-danger": { component: BuildingBlocksCompassConfigCompassArcAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/compass/config-compass-radial-advice": { component: BuildingBlocksCompassConfigCompassRadialAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 18 },
  "building-blocks/compass/config-compass-radial-advice/type-area": { component: BuildingBlocksCompassConfigCompassRadialAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 9 },
  "building-blocks/compass/config-compass-radial-advice/type-point": { component: BuildingBlocksCompassConfigCompassRadialAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/compass/config-compass-arc-advice": { component: BuildingBlocksCompassConfigCompassArcAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 68 },
  "building-blocks/compass/config-compass-arc-advice/type-area": { component: BuildingBlocksCompassConfigCompassArcAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/compass/config-compass-arc-advice/type-point": { component: BuildingBlocksCompassConfigCompassArcAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/compass/config-compass-linear-advice": { component: BuildingBlocksCompassConfigCompassLinearAdvice, width: 684.0, height: 1137.0, kind: "composite", group: "building-blocks", shapeCount: 9 },
  "building-blocks/compass/config-compass-linear-advice/preset-advice": { component: BuildingBlocksCompassConfigCompassLinearAdvicePresetAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/heading/config-heading-radial-advice-optimal": { component: BuildingBlocksHeadingConfigHeadingRadialAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/heading/config-heading-arc-advice-optimal": { component: BuildingBlocksHeadingConfigHeadingArcAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/heading/config-heading-radial-advice-danger": { component: BuildingBlocksHeadingConfigHeadingRadialAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/heading/config-heading-arc-advice-danger": { component: BuildingBlocksHeadingConfigHeadingArcAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/heading/config-heading-radial-advice": { component: BuildingBlocksHeadingConfigHeadingRadialAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 18 },
  "building-blocks/heading/config-heading-radial-advice/type-area": { component: BuildingBlocksHeadingConfigHeadingRadialAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 9 },
  "building-blocks/heading/config-heading-radial-advice/type-point": { component: BuildingBlocksHeadingConfigHeadingRadialAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/heading/config-heading-arc-advice": { component: BuildingBlocksHeadingConfigHeadingArcAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 68 },
  "building-blocks/heading/config-heading-arc-advice/type-area": { component: BuildingBlocksHeadingConfigHeadingArcAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/heading/config-heading-arc-advice/type-point": { component: BuildingBlocksHeadingConfigHeadingArcAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/heading/config-heading-linear-advice": { component: BuildingBlocksHeadingConfigHeadingLinearAdvice, width: 684.0, height: 1137.0, kind: "leaf", group: "building-blocks", shapeCount: 16 },
  "building-blocks/rate-of-turn/config-rot-radial-advice-optimal": { component: BuildingBlocksRateOfTurnConfigRotRadialAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rate-of-turn/config-rot-arc-advice-optimal": { component: BuildingBlocksRateOfTurnConfigRotArcAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rate-of-turn/config-rot-radial-advice-danger": { component: BuildingBlocksRateOfTurnConfigRotRadialAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rate-of-turn/config-rot-arc-advice-danger": { component: BuildingBlocksRateOfTurnConfigRotArcAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rate-of-turn/config-heading-radial-advice": { component: BuildingBlocksRateOfTurnConfigHeadingRadialAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 18 },
  "building-blocks/rate-of-turn/config-heading-radial-advice/type-area": { component: BuildingBlocksRateOfTurnConfigHeadingRadialAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 9 },
  "building-blocks/rate-of-turn/config-heading-radial-advice/type-point": { component: BuildingBlocksRateOfTurnConfigHeadingRadialAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/rate-of-turn/config-heading-arc-advice": { component: BuildingBlocksRateOfTurnConfigHeadingArcAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 68 },
  "building-blocks/rate-of-turn/config-heading-arc-advice/type-area": { component: BuildingBlocksRateOfTurnConfigHeadingArcAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/rate-of-turn/config-heading-arc-advice/type-point": { component: BuildingBlocksRateOfTurnConfigHeadingArcAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 7 },
  "building-blocks/rate-of-turn/config-heading-linear-advice": { component: BuildingBlocksRateOfTurnConfigHeadingLinearAdvice, width: 684.0, height: 1137.0, kind: "leaf", group: "building-blocks", shapeCount: 16 },
  "building-blocks/speed/config-speed-radial-advice-optimal": { component: BuildingBlocksSpeedConfigSpeedRadialAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/speed/config-speed-radial-advice-danger": { component: BuildingBlocksSpeedConfigSpeedRadialAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/speed/config-speed-radial-advice": { component: BuildingBlocksSpeedConfigSpeedRadialAdvice, width: 544.0, height: 1112.0, kind: "composite", group: "building-blocks", shapeCount: 18 },
  "building-blocks/speed/config-speed-radial-advice/type-area": { component: BuildingBlocksSpeedConfigSpeedRadialAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 11 },
  "building-blocks/speed/config-speed-radial-advice/type-point": { component: BuildingBlocksSpeedConfigSpeedRadialAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 5 },
  "building-blocks/depth/config-depth-advice": { component: BuildingBlocksDepthConfigDepthAdvice, width: 686.0, height: 1151.0, kind: "composite", group: "building-blocks", shapeCount: 11 },
  "building-blocks/depth/config-depth-advice/preset-caution": { component: BuildingBlocksDepthConfigDepthAdvicePresetCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 10 },
  "building-blocks/main-engine/config-main-engine-advice/type-rpm-style-regular": { component: BuildingBlocksMainEngineConfigMainEngineAdviceTypeRpmStyleRegular, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 12 },
  "building-blocks/main-engine/config-main-engine-advice/type-rpm-style-propellar": { component: BuildingBlocksMainEngineConfigMainEngineAdviceTypeRpmStylePropellar, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 12 },
  "building-blocks/main-engine/config-main-engine-advice/type-pitch-style-regular": { component: BuildingBlocksMainEngineConfigMainEngineAdviceTypePitchStyleRegular, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 22 },
  "building-blocks/main-engine/config-main-engine-advice/type-pitch-style-propellar": { component: BuildingBlocksMainEngineConfigMainEngineAdviceTypePitchStylePropellar, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 22 },
  "building-blocks/azimuth/config-azimuth-advice-optimal": { component: BuildingBlocksAzimuthConfigAzimuthAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice-frame": { component: BuildingBlocksAzimuthConfigAzimuthAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice-caution": { component: BuildingBlocksAzimuthConfigAzimuthAdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice-danger": { component: BuildingBlocksAzimuthConfigAzimuthAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice-port": { component: BuildingBlocksAzimuthConfigAzimuthAdvicePort, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice-stbd": { component: BuildingBlocksAzimuthConfigAzimuthAdviceStbd, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/azimuth/config-azimuth-advice/type-area": { component: BuildingBlocksAzimuthConfigAzimuthAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 63 },
  "building-blocks/azimuth/config-azimuth-advice/type-port-stbd": { component: BuildingBlocksAzimuthConfigAzimuthAdviceTypePortStbd, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 8 },
  "building-blocks/azimuth/config-azimuth-advice/type-point": { component: BuildingBlocksAzimuthConfigAzimuthAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/rudder/config-rudder-advice-optimal": { component: BuildingBlocksRudderConfigRudderAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rudder/config-rudder-advice-frame": { component: BuildingBlocksRudderConfigRudderAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rudder/config-rudder-advice-caution": { component: BuildingBlocksRudderConfigRudderAdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rudder/config-rudder-advice-danger": { component: BuildingBlocksRudderConfigRudderAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/rudder/config-rudder-advice": { component: BuildingBlocksRudderConfigRudderAdvice, width: 589.0, height: 1150.0, kind: "composite", group: "building-blocks", shapeCount: 65 },
  "building-blocks/rudder/config-rudder-advice/type-area": { component: BuildingBlocksRudderConfigRudderAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/rudder/config-rudder-advice/type-point": { component: BuildingBlocksRudderConfigRudderAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/gauge-radial/config-gauge-270-advice-optimal": { component: BuildingBlocksGaugeRadialConfigGauge270AdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-180-advice-optimal": { component: BuildingBlocksGaugeRadialConfigGauge180AdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-270-advice-frame": { component: BuildingBlocksGaugeRadialConfigGauge270AdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-180-advice-frame": { component: BuildingBlocksGaugeRadialConfigGauge180AdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-270-advice-caution": { component: BuildingBlocksGaugeRadialConfigGauge270AdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-180-advice-caution": { component: BuildingBlocksGaugeRadialConfigGauge180AdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/gauge-radial/config-gauge-270-advice/type-area": { component: BuildingBlocksGaugeRadialConfigGauge270AdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/gauge-radial/config-gauge-270-advice/type-point": { component: BuildingBlocksGaugeRadialConfigGauge270AdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/gauge-radial/config-gauge-180-advice/type-area": { component: BuildingBlocksGaugeRadialConfigGauge180AdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 59 },
  "building-blocks/gauge-radial/config-gauge-180-advice/type-point": { component: BuildingBlocksGaugeRadialConfigGauge180AdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/watch/config-watch-advice-optimal": { component: BuildingBlocksWatchConfigWatchAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/watch/config-watch-advice-caution": { component: BuildingBlocksWatchConfigWatchAdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/watch/config-watch-advice/type-area": { component: BuildingBlocksWatchConfigWatchAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/watch/config-watch-advice/type-point": { component: BuildingBlocksWatchConfigWatchAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/sail/config-sail-advice-optimal": { component: BuildingBlocksSailConfigSailAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/sail/config-sail-advice-frame": { component: BuildingBlocksSailConfigSailAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/sail/config-sail-advice-caution": { component: BuildingBlocksSailConfigSailAdviceCaution, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/sail/config-sail-advice-danger": { component: BuildingBlocksSailConfigSailAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/sail/config-roll-advice": { component: BuildingBlocksSailConfigRollAdvice, width: 589.0, height: 1201.0, kind: "composite", group: "building-blocks", shapeCount: 69 },
  "building-blocks/sail/config-roll-advice/type-area": { component: BuildingBlocksSailConfigRollAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 63 },
  "building-blocks/sail/config-roll-advice/type-point": { component: BuildingBlocksSailConfigRollAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/tunnel-thruster/config-tunnel-thruster-linear-advice": { component: BuildingBlocksTunnelThrusterConfigTunnelThrusterLinearAdvice, width: 684.0, height: 1137.0, kind: "composite", group: "building-blocks", shapeCount: 16 },
  "building-blocks/tunnel-thruster/config-tunnel-thruster-linear-advice/preset-advice": { component: BuildingBlocksTunnelThrusterConfigTunnelThrusterLinearAdvicePresetAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 14 },
  "building-blocks/gauge-bar/config-gauge-horizontal-linear-advice": { component: BuildingBlocksGaugeBarConfigGaugeHorizontalLinearAdvice, width: 684.0, height: 1137.0, kind: "composite", group: "building-blocks", shapeCount: 10 },
  "building-blocks/gauge-bar/config-gauge-horizontal-linear-advice/preset-advice": { component: BuildingBlocksGaugeBarConfigGaugeHorizontalLinearAdvicePresetAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 8 },
  "building-blocks/gauge-bar/config-gauge-vertical-advice": { component: BuildingBlocksGaugeBarConfigGaugeVerticalAdvice, width: 686.0, height: 1151.0, kind: "composite", group: "building-blocks", shapeCount: 13 },
  "building-blocks/gauge-bar/config-gauge-vertical-advice/preset-advice": { component: BuildingBlocksGaugeBarConfigGaugeVerticalAdvicePresetAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 12 },
  "building-blocks/gauge-trend/config-gauge-vertical-advice": { component: BuildingBlocksGaugeTrendConfigGaugeVerticalAdvice, width: 686.0, height: 1151.0, kind: "composite", group: "building-blocks", shapeCount: 23 },
  "building-blocks/gauge-trend/config-gauge-vertical-advice/preset-advice": { component: BuildingBlocksGaugeTrendConfigGaugeVerticalAdvicePresetAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 22 },
  "building-blocks/motion/config-roll-advice-optimal": { component: BuildingBlocksMotionConfigRollAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitch-advice-optimal": { component: BuildingBlocksMotionConfigPitchAdviceOptimal, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-roll-advice-frame": { component: BuildingBlocksMotionConfigRollAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitchroll-roll-advice-frame": { component: BuildingBlocksMotionConfigPitchrollRollAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitch-advice-frame": { component: BuildingBlocksMotionConfigPitchAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitchroll-pitch-advice-frame": { component: BuildingBlocksMotionConfigPitchrollPitchAdviceFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-roll-advice-danger": { component: BuildingBlocksMotionConfigRollAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitchroll-roll-advice-danger": { component: BuildingBlocksMotionConfigPitchrollRollAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitch-advice-danger": { component: BuildingBlocksMotionConfigPitchAdviceDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-pitchroll-pitch-danger": { component: BuildingBlocksMotionConfigPitchrollPitchDanger, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 1 },
  "building-blocks/motion/config-roll-advice/type-area": { component: BuildingBlocksMotionConfigRollAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 58 },
  "building-blocks/motion/config-roll-advice/type-area-dual": { component: BuildingBlocksMotionConfigRollAdviceTypeAreaDual, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 116 },
  "building-blocks/motion/config-roll-advice/type-point": { component: BuildingBlocksMotionConfigRollAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/motion/config-roll-advice/type-area__instance-02": { component: BuildingBlocksMotionConfigRollAdviceTypeAreaInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 58 },
  "building-blocks/motion/config-roll-advice/type-area-dual__instance-02": { component: BuildingBlocksMotionConfigRollAdviceTypeAreaDualInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 116 },
  "building-blocks/motion/config-roll-advice/type-point__instance-02": { component: BuildingBlocksMotionConfigRollAdviceTypePointInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/motion/config-pitchroll-advice/type-area": { component: BuildingBlocksMotionConfigPitchrollAdviceTypeArea, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 116 },
  "building-blocks/motion/config-pitchroll-advice/type-dual-frame": { component: BuildingBlocksMotionConfigPitchrollAdviceTypeDualFrame, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 232 },
  "building-blocks/motion/config-pitchroll-advice/type-point": { component: BuildingBlocksMotionConfigPitchrollAdviceTypePoint, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 4 },
  "building-blocks/motion/config-heave-advice/preset-regular": { component: BuildingBlocksMotionConfigHeaveAdvicePresetRegular, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 20 },
  "building-blocks/motion/config-pitchrollheave-advice/preset-regular": { component: BuildingBlocksMotionConfigPitchrollheaveAdvicePresetRegular, width: 512.0, height: 512.0, kind: "leaf", group: "building-blocks", shapeCount: 20 },
  "objects/air-drones": { component: ObjectsAirDrones, width: 621.0, height: 1781.0, kind: "composite", group: "objects", shapeCount: 103 },
  "objects/air-drones/air-drone": { component: ObjectsAirDronesAirDrone, width: 458.0, height: 1613.0, kind: "composite", group: "objects", shapeCount: 100 },
  "objects/air-drones/air-drone/type-small-view-top": { component: ObjectsAirDronesAirDroneTypeSmallViewTop, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 9 },
  "objects/air-drones/air-drone/type-small-view-front": { component: ObjectsAirDronesAirDroneTypeSmallViewFront, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 17 },
  "objects/air-drones/air-drone/type-small-view-stbd-side": { component: ObjectsAirDronesAirDroneTypeSmallViewStbdSide, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 16 },
  "objects/air-drones/air-drone/type-medium-view-front": { component: ObjectsAirDronesAirDroneTypeMediumViewFront, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 18 },
  "objects/air-drones/air-drone/type-medium-view-stbd-side": { component: ObjectsAirDronesAirDroneTypeMediumViewStbdSide, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 16 },
  "objects/air-drones/air-drone/type-medium-view-top": { component: ObjectsAirDronesAirDroneTypeMediumViewTop, width: 160.0, height: 160.0, kind: "composite", group: "objects", shapeCount: 22 },
  "objects/air-drones/air-drone/type-medium-view-top/union": { component: ObjectsAirDronesAirDroneTypeMediumViewTopUnion, width: 51.0, height: 51.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/air-drones/air-drone/type-medium-view-top/union__instance-02": { component: ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance02, width: 51.0, height: 51.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/air-drones/air-drone/type-medium-view-top/union__instance-03": { component: ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance03, width: 51.0, height: 51.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/air-drones/air-drone/type-medium-view-top/union__instance-04": { component: ObjectsAirDronesAirDroneTypeMediumViewTopUnionInstance04, width: 51.0, height: 51.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-psv-view-top-ccrp-false": { component: ObjectsVesselsVesselTypePsvViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 6 },
  "objects/vessels/vessel/type-cargo-wind-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeCargoWindViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 6 },
  "objects/vessels/vessel/type-tanker-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeTankerViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 5 },
  "objects/vessels/vessel/type-cargo-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeCargoViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-sov-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeSovViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 8 },
  "objects/vessels/vessel/type-fishing-vessel-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeFishingVesselViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 6 },
  "objects/vessels/vessel/type-psv-view-aft-ccrp-false": { component: ObjectsVesselsVesselTypePsvViewAftCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 9 },
  "objects/vessels/vessel/type-psv-view-fore-ccrp-false": { component: ObjectsVesselsVesselTypePsvViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 11 },
  "objects/vessels/vessel/type-cargo-wind-view-fore-ccrp-false": { component: ObjectsVesselsVesselTypeCargoWindViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 20 },
  "objects/vessels/vessel/type-tanker-view-fore-ccrp-false": { component: ObjectsVesselsVesselTypeTankerViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 24 },
  "objects/vessels/vessel/type-cargo-view-fore-ccrp-false": { component: ObjectsVesselsVesselTypeCargoViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 22 },
  "objects/vessels/vessel/type-generic-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeGenericViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-generic-view-top-ccrp-true": { component: ObjectsVesselsVesselTypeGenericViewTopCcrpTrue, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-generic-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeGenericViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-psv-view-top-ccrp-true": { component: ObjectsVesselsVesselTypePsvViewTopCcrpTrue, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 6 },
  "objects/vessels/vessel/type-psv-view-side-ccrp-false": { component: ObjectsVesselsVesselTypePsvViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-cargo-wind-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeCargoWindViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 10 },
  "objects/vessels/vessel/type-tanker-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeTankerViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 5 },
  "objects/vessels/vessel/type-cargo-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeCargoViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 3 },
  "objects/vessels/vessel/type-usv-large-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeUsvLargeViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-usv-small-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-sov-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeSovViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-fishing-vessel-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeFishingVesselViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-car-ferry-view-side-ccrp-false": { component: ObjectsVesselsVesselTypeCarFerryViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-car-ferry-view-top-ccrp-false": { component: ObjectsVesselsVesselTypeCarFerryViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 3 },
  "objects/vessels/vessel/type-car-ferry-view-fore-ccrp-false": { component: ObjectsVesselsVesselTypeCarFerryViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/vessels/vessel/type-car-ferry-view-aft-ccrp-false": { component: ObjectsVesselsVesselTypeCarFerryViewAftCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 2 },
  "objects/underwater-drones": { component: ObjectsUnderwaterDrones, width: 801.0, height: 1779.0, kind: "composite", group: "objects", shapeCount: 74 },
  "objects/underwater-drones/rov": { component: ObjectsUnderwaterDronesRov, width: 641.0, height: 1619.0, kind: "composite", group: "objects", shapeCount: 71 },
  "objects/underwater-drones/rov/type-rov-view-side-ccrp-false": { component: ObjectsUnderwaterDronesRovTypeRovViewSideCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 19 },
  "objects/underwater-drones/rov/type-rov-view-top-ccrp-false": { component: ObjectsUnderwaterDronesRovTypeRovViewTopCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 27 },
  "objects/underwater-drones/rov/type-rov-view-fore-ccrp-false": { component: ObjectsUnderwaterDronesRovTypeRovViewForeCcrpFalse, width: 160.0, height: 160.0, kind: "leaf", group: "objects", shapeCount: 23 },
  "indicators/conning": { component: IndicatorsConning, width: 1346.0, height: 400.0, kind: "composite", group: "indicators", shapeCount: 163 },
  "indicators/conning/conning-compass": { component: IndicatorsConningConningCompass, width: 264.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 47 },
  "indicators/conning/conning-compass/direction-heading-type-regular": { component: IndicatorsConningConningCompassDirectionHeadingTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-compass/direction-course-type-regular": { component: IndicatorsConningConningCompassDirectionCourseTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-compass/direction-north-type-regular": { component: IndicatorsConningConningCompassDirectionNorthTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 9 },
  "indicators/conning/conning-compass/direction-north-type-labeled": { component: IndicatorsConningConningCompassDirectionNorthTypeLabeled, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 9 },
  "indicators/conning/conning-compass/direction-heading-type-labeled": { component: IndicatorsConningConningCompassDirectionHeadingTypeLabeled, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-compass/direction-course-type-labeled": { component: IndicatorsConningConningCompassDirectionCourseTypeLabeled, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-heading": { component: IndicatorsConningConningHeading, width: 88.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 16 },
  "indicators/conning/conning-heading/type-hdg": { component: IndicatorsConningConningHeadingTypeHdg, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 10 },
  "indicators/conning/conning-heading/type-xtd": { component: IndicatorsConningConningHeadingTypeXtd, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/conning/conning-rateofturn": { component: IndicatorsConningConningRateofturn, width: 89.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 16 },
  "indicators/conning/conning-rateofturn/type-radial": { component: IndicatorsConningConningRateofturnTypeRadial, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 12 },
  "indicators/conning/conning-rateofturn/type-linear": { component: IndicatorsConningConningRateofturnTypeLinear, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 3 },
  "indicators/conning/conning-depth": { component: IndicatorsConningConningDepth, width: 88.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 15 },
  "indicators/conning/conning-depth/type-spline": { component: IndicatorsConningConningDepthTypeSpline, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-depth/type-filled": { component: IndicatorsConningConningDepthTypeFilled, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-speed": { component: IndicatorsConningConningSpeed, width: 88.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 19 },
  "indicators/conning/conning-speed/type-needle": { component: IndicatorsConningConningSpeedTypeNeedle, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/conning/conning-pitch": { component: IndicatorsConningConningPitch, width: 88.0, height: 159.0, kind: "composite", group: "indicators", shapeCount: 15 },
  "indicators/conning/conning-pitch/type-regular": { component: IndicatorsConningConningPitchTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-roll": { component: IndicatorsConningConningRoll, width: 88.0, height: 159.0, kind: "composite", group: "indicators", shapeCount: 15 },
  "indicators/conning/conning-roll/type-enhanced": { component: IndicatorsConningConningRollTypeEnhanced, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-roll/type-regular": { component: IndicatorsConningConningRollTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-heave": { component: IndicatorsConningConningHeave, width: 88.0, height: 159.0, kind: "composite", group: "indicators", shapeCount: 15 },
  "indicators/conning/conning-heave/type-enhanced": { component: IndicatorsConningConningHeaveTypeEnhanced, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/conning/conning-heave/type-regular": { component: IndicatorsConningConningHeaveTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/environment": { component: IndicatorsEnvironment, width: 397.0, height: 400.0, kind: "composite", group: "indicators", shapeCount: 51 },
  "indicators/environment/environment-wind": { component: IndicatorsEnvironmentEnvironmentWind, width: 92.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 17 },
  "indicators/environment/environment-wind/direction-heading": { component: IndicatorsEnvironmentEnvironmentWindDirectionHeading, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 6 },
  "indicators/environment/environment-wind/wind-7": { component: IndicatorsEnvironmentEnvironmentWindWind7, width: 24.0, height: 24.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/environment/environment-wind/direction-labeled": { component: IndicatorsEnvironmentEnvironmentWindDirectionLabeled, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 10 },
  "indicators/environment/environment-wind__instance-02": { component: IndicatorsEnvironmentEnvironmentWindInstance02, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/environment/environment-wind__instance-03": { component: IndicatorsEnvironmentEnvironmentWindInstance03, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/environment/environment-wind__instance-04": { component: IndicatorsEnvironmentEnvironmentWindInstance04, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/environment/environment-current": { component: IndicatorsEnvironmentEnvironmentCurrent, width: 92.0, height: 185.0, kind: "composite", group: "indicators", shapeCount: 7 },
  "indicators/environment/environment-current/direction-heading": { component: IndicatorsEnvironmentEnvironmentCurrentDirectionHeading, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 6 },
  "indicators/environment/environment-current/current-3": { component: IndicatorsEnvironmentEnvironmentCurrentCurrent3, width: 24.0, height: 24.0, kind: "leaf", group: "indicators", shapeCount: 3 },
  "indicators/propulsion": { component: IndicatorsPropulsion, width: 615.0, height: 400.0, kind: "composite", group: "indicators", shapeCount: 89 },
  "indicators/propulsion/propulsion-azimuth": { component: IndicatorsPropulsionPropulsionAzimuth, width: 88.0, height: 232.0, kind: "composite", group: "indicators", shapeCount: 16 },
  "indicators/propulsion/propulsion-azimuth/state-in-command": { component: IndicatorsPropulsionPropulsionAzimuthStateInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/propulsion/propulsion-azimuth/state-not-in-command": { component: IndicatorsPropulsionPropulsionAzimuthStateNotInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/propulsion/propulsion-azimuth/state-off": { component: IndicatorsPropulsionPropulsionAzimuthStateOff, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/propulsion/propulsion-tunnel-thruster": { component: IndicatorsPropulsionPropulsionTunnelThruster, width: 88.0, height: 232.0, kind: "composite", group: "indicators", shapeCount: 17 },
  "indicators/propulsion/propulsion-tunnel-thruster/state-in-command": { component: IndicatorsPropulsionPropulsionTunnelThrusterStateInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/propulsion/propulsion-tunnel-thruster/state-not-in-command": { component: IndicatorsPropulsionPropulsionTunnelThrusterStateNotInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/propulsion/propulsion-tunnel-thruster/state-off": { component: IndicatorsPropulsionPropulsionTunnelThrusterStateOff, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 2 },
  "indicators/propulsion/propulsion-main-engine": { component: IndicatorsPropulsionPropulsionMainEngine, width: 88.0, height: 232.0, kind: "composite", group: "indicators", shapeCount: 30 },
  "indicators/propulsion/propulsion-main-engine/state-in-command": { component: IndicatorsPropulsionPropulsionMainEngineStateInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 12 },
  "indicators/propulsion/propulsion-main-engine/state-not-in-command": { component: IndicatorsPropulsionPropulsionMainEngineStateNotInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 12 },
  "indicators/propulsion/propulsion-main-engine/state-off": { component: IndicatorsPropulsionPropulsionMainEngineStateOff, width: 48.0, height: 48.0, kind: "composite", group: "indicators", shapeCount: 5 },
  "indicators/propulsion/propulsion-main-engine/state-off/frame-background": { component: IndicatorsPropulsionPropulsionMainEngineStateOffFrameBackground, width: 32.0, height: 32.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/propulsion/propulsion-rudder": { component: IndicatorsPropulsionPropulsionRudder, width: 88.0, height: 232.0, kind: "composite", group: "indicators", shapeCount: 21 },
  "indicators/propulsion/propulsion-rudder/state-in-command": { component: IndicatorsPropulsionPropulsionRudderStateInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 8 },
  "indicators/propulsion/propulsion-rudder/state-not-in-command": { component: IndicatorsPropulsionPropulsionRudderStateNotInCommand, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 8 },
  "indicators/propulsion/propulsion-rudder/state-off": { component: IndicatorsPropulsionPropulsionRudderStateOff, width: 48.0, height: 48.0, kind: "composite", group: "indicators", shapeCount: 4 },
  "indicators/propulsion/propulsion-rudder/state-off/propulsion-rudder": { component: IndicatorsPropulsionPropulsionRudderStateOffPropulsionRudder, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/gauges": { component: IndicatorsGauges, width: 626.0, height: 400.0, kind: "composite", group: "indicators", shapeCount: 72 },
  "indicators/gauges/gauge-bar": { component: IndicatorsGaugesGaugeBar, width: 162.0, height: 168.0, kind: "composite", group: "indicators", shapeCount: 19 },
  "indicators/gauges/gauge-bar/direction-vertical-type-fill": { component: IndicatorsGaugesGaugeBarDirectionVerticalTypeFill, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/gauges/gauge-bar/direction-horizontal-type-fill": { component: IndicatorsGaugesGaugeBarDirectionHorizontalTypeFill, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "indicators/gauges/gauge-bar/direction-horizontal-type-tinded": { component: IndicatorsGaugesGaugeBarDirectionHorizontalTypeTinded, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/gauges/gauge-bar/direction-vertical-type-tinded": { component: IndicatorsGaugesGaugeBarDirectionVerticalTypeTinded, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/gauges/gauge-trend": { component: IndicatorsGaugesGaugeTrend, width: 88.0, height: 168.0, kind: "leaf", group: "indicators", shapeCount: 19 },
  "indicators/gauges/gauge-radial": { component: IndicatorsGaugesGaugeRadial, width: 163.0, height: 168.0, kind: "composite", group: "indicators", shapeCount: 29 },
  "indicators/gauges/gauge-radial/sector-270-style-regular": { component: IndicatorsGaugesGaugeRadialSector270StyleRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/gauges/gauge-radial/sector-180-style-regular": { component: IndicatorsGaugesGaugeRadialSector180StyleRegular, width: 48.0, height: 48.0, kind: "leaf", group: "indicators", shapeCount: 7 },
  "indicators/gauges/gauge-radial/sector-270-style-flat": { component: IndicatorsGaugesGaugeRadialSector270StyleFlat, width: 48.0, height: 48.0, kind: "composite", group: "indicators", shapeCount: 7 },
  "indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow": { component: IndicatorsGaugesGaugeRadialSector270StyleFlatNArrow, width: 48.0, height: 48.0, kind: "composite", group: "indicators", shapeCount: 7 },
  "indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow/frame-track": { component: IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrack, width: 36.0, height: 36.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/gauges/gauge-radial/sector-270-style-flat/n-arrow/frame-track__instance-02": { component: IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrackInstance02, width: 36.0, height: 36.0, kind: "leaf", group: "indicators", shapeCount: 5 },
  "indicators/gauges/gauge-radial/sector-180-style-flat": { component: IndicatorsGaugesGaugeRadialSector180StyleFlat, width: 48.0, height: 48.0, kind: "composite", group: "indicators", shapeCount: 7 },
  "indicators/gauges/gauge-radial/sector-180-style-flat/wind-7": { component: IndicatorsGaugesGaugeRadialSector180StyleFlatWind7, width: 24.0, height: 24.0, kind: "leaf", group: "indicators", shapeCount: 4 },
  "environment/wind/type-histogram-priority-regular": { component: EnvironmentWindTypeHistogramPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 29 },
  "environment/wind/type-histogram-priority-enhanced": { component: EnvironmentWindTypeHistogramPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 29 },
  "environment/wind/type-wind-direction-priority-regular": { component: EnvironmentWindTypeWindDirectionPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 20 },
  "environment/wind/type-wind-direction-priority-enhanced": { component: EnvironmentWindTypeWindDirectionPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 20 },
  "environment/wind/type-wind-force-priority-regular": { component: EnvironmentWindTypeWindForcePriorityRegular, width: 384.0, height: 384.0, kind: "composite", group: "environment", shapeCount: 30 },
  "environment/wind/type-wind-force-priority-regular/wind": { component: EnvironmentWindTypeWindForcePriorityRegularWind, width: 232.0, height: 232.0, kind: "leaf", group: "environment", shapeCount: 16 },
  "environment/wind/type-wind-force-priority-enhanced": { component: EnvironmentWindTypeWindForcePriorityEnhanced, width: 384.0, height: 384.0, kind: "composite", group: "environment", shapeCount: 30 },
  "environment/wind/type-wind-force-priority-enhanced/wind": { component: EnvironmentWindTypeWindForcePriorityEnhancedWind, width: 232.0, height: 232.0, kind: "leaf", group: "environment", shapeCount: 16 },
  "environment/wind/current/type-direction-priority-regular": { component: EnvironmentWindCurrentTypeDirectionPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 20 },
  "environment/wind/current/type-direction-priority-enhanced": { component: EnvironmentWindCurrentTypeDirectionPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 20 },
  "environment/wind/current/type-vessel-priority-enhanced": { component: EnvironmentWindCurrentTypeVesselPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 30 },
  "environment/wind/current/type-vessel-priority-regular": { component: EnvironmentWindCurrentTypeVesselPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "environment", shapeCount: 30 },
  "environment/wind/current/documentation-text": { component: EnvironmentWindCurrentDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "environment", shapeCount: 6 },
  "gauges/gauge-radial/gauge-radial-270": { component: GaugesGaugeRadialGaugeRadial270, width: 976.0, height: 1345.0, kind: "composite", group: "gauges", shapeCount: 108 },
  "gauges/gauge-radial/gauge-radial-270/type-tint-bar-enhanced-false": { component: GaugesGaugeRadialGaugeRadial270TypeTintBarEnhancedFalse, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 19 },
  "gauges/gauge-radial/gauge-radial-270/type-tint-bar-enhanced-true": { component: GaugesGaugeRadialGaugeRadial270TypeTintBarEnhancedTrue, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 19 },
  "gauges/gauge-radial/gauge-radial-270/type-fill-bar-enhanced-false": { component: GaugesGaugeRadialGaugeRadial270TypeFillBarEnhancedFalse, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 18 },
  "gauges/gauge-radial/gauge-radial-270/type-fill-bar-enhanced-true": { component: GaugesGaugeRadialGaugeRadial270TypeFillBarEnhancedTrue, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 18 },
  "gauges/gauge-radial/gauge-radial-270/type-needle-enhanced-false": { component: GaugesGaugeRadialGaugeRadial270TypeNeedleEnhancedFalse, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-radial/gauge-radial-270/type-needle-enhanced-true": { component: GaugesGaugeRadialGaugeRadial270TypeNeedleEnhancedTrue, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-radial/gauge-radial-180": { component: GaugesGaugeRadialGaugeRadial180, width: 976.0, height: 1345.0, kind: "composite", group: "gauges", shapeCount: 108 },
  "gauges/gauge-radial/gauge-radial-180/type-tint-bar-enhanced-false": { component: GaugesGaugeRadialGaugeRadial180TypeTintBarEnhancedFalse, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-radial/gauge-radial-180/type-fill-bar-enhanced-false": { component: GaugesGaugeRadialGaugeRadial180TypeFillBarEnhancedFalse, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 15 },
  "gauges/gauge-radial/gauge-radial-180/type-needle-enhanced-false": { component: GaugesGaugeRadialGaugeRadial180TypeNeedleEnhancedFalse, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-radial/gauge-radial-180/type-tint-bar-enhanced-true": { component: GaugesGaugeRadialGaugeRadial180TypeTintBarEnhancedTrue, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-radial/gauge-radial-180/type-fill-bar-enhanced-true": { component: GaugesGaugeRadialGaugeRadial180TypeFillBarEnhancedTrue, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 15 },
  "gauges/gauge-radial/gauge-radial-180/type-needle-enhanced-true": { component: GaugesGaugeRadialGaugeRadial180TypeNeedleEnhancedTrue, width: 384.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-radial/gauge-radial-180/documentation-text": { component: GaugesGaugeRadialGaugeRadial180DocumentationText, width: 792.0, height: 144.0, kind: "leaf", group: "gauges", shapeCount: 18 },
  "gauges/gauge-trend/has-scale-true-type-bar-negative-false-priority-regular": { component: GaugesGaugeTrendHasScaleTrueTypeBarNegativeFalsePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/advice": { component: GaugesGaugeTrendAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-bar-negative-false-priority-enhanced": { component: GaugesGaugeTrendHasScaleTrueTypeBarNegativeFalsePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/advice__instance-02": { component: GaugesGaugeTrendAdviceInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-bar-negative-true-priority-regular": { component: GaugesGaugeTrendHasScaleTrueTypeBarNegativeTruePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 20 },
  "gauges/gauge-trend/advice__instance-03": { component: GaugesGaugeTrendAdviceInstance03, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-bar-negative-true-priority-enhanced": { component: GaugesGaugeTrendHasScaleTrueTypeBarNegativeTruePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 20 },
  "gauges/gauge-trend/advice__instance-04": { component: GaugesGaugeTrendAdviceInstance04, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-bar-negative-false-priority-regular": { component: GaugesGaugeTrendHasScaleFalseTypeBarNegativeFalsePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-trend/advice__instance-05": { component: GaugesGaugeTrendAdviceInstance05, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-bar-negative-false-priority-enhanced": { component: GaugesGaugeTrendHasScaleFalseTypeBarNegativeFalsePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-trend/advice__instance-06": { component: GaugesGaugeTrendAdviceInstance06, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-bar-negative-true-priority-regular": { component: GaugesGaugeTrendHasScaleFalseTypeBarNegativeTruePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-trend/advice__instance-07": { component: GaugesGaugeTrendAdviceInstance07, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-bar-negative-true-priority-enhanced": { component: GaugesGaugeTrendHasScaleFalseTypeBarNegativeTruePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-trend/advice__instance-08": { component: GaugesGaugeTrendAdviceInstance08, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-spline-negative-false-priority-regular": { component: GaugesGaugeTrendHasScaleFalseTypeSplineNegativeFalsePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 8 },
  "gauges/gauge-trend/advice__instance-09": { component: GaugesGaugeTrendAdviceInstance09, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-spline-negative-false-priority-enhanced": { component: GaugesGaugeTrendHasScaleFalseTypeSplineNegativeFalsePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 8 },
  "gauges/gauge-trend/advice__instance-10": { component: GaugesGaugeTrendAdviceInstance10, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-spline-negative-true-priority-regular": { component: GaugesGaugeTrendHasScaleFalseTypeSplineNegativeTruePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-trend/advice__instance-11": { component: GaugesGaugeTrendAdviceInstance11, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-false-type-spline-negative-true-priority-enhanced": { component: GaugesGaugeTrendHasScaleFalseTypeSplineNegativeTruePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-trend/advice__instance-12": { component: GaugesGaugeTrendAdviceInstance12, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-spline-negative-false-priority-regular": { component: GaugesGaugeTrendHasScaleTrueTypeSplineNegativeFalsePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 14 },
  "gauges/gauge-trend/advice__instance-13": { component: GaugesGaugeTrendAdviceInstance13, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-spline-negative-false-priority-enhanced": { component: GaugesGaugeTrendHasScaleTrueTypeSplineNegativeFalsePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 14 },
  "gauges/gauge-trend/advice__instance-14": { component: GaugesGaugeTrendAdviceInstance14, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-spline-negative-true-priority-regular": { component: GaugesGaugeTrendHasScaleTrueTypeSplineNegativeTruePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/advice__instance-15": { component: GaugesGaugeTrendAdviceInstance15, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/has-scale-true-type-spline-negative-true-priority-enhanced": { component: GaugesGaugeTrendHasScaleTrueTypeSplineNegativeTruePriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/advice__instance-16": { component: GaugesGaugeTrendAdviceInstance16, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-trend/documentation-text": { component: GaugesGaugeTrendDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/documentation-text": { component: GaugesWatchDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "gauges", shapeCount: 2 },
  "gauges/watch/style-regular": { component: GaugesWatchStyleRegular, width: 512.0, height: 512.0, kind: "composite", group: "gauges", shapeCount: 32 },
  "gauges/watch/style-regular/frame-scale": { component: GaugesWatchStyleRegularFrameScale, width: 368.0, height: 368.0, kind: "leaf", group: "gauges", shapeCount: 32 },
  "gauges/watch/style-regular/frame-track": { component: GaugesWatchStyleRegularFrameTrack, width: 320.0, height: 320.0, kind: "leaf", group: "gauges", shapeCount: 32 },
  "gauges/watch/style-regular/advice": { component: GaugesWatchStyleRegularAdvice, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 32 },
  "gauges/watch/style-planner": { component: GaugesWatchStylePlanner, width: 512.0, height: 512.0, kind: "composite", group: "gauges", shapeCount: 27 },
  "gauges/watch/style-planner/frame-scale": { component: GaugesWatchStylePlannerFrameScale, width: 368.0, height: 368.0, kind: "leaf", group: "gauges", shapeCount: 27 },
  "gauges/watch/style-track": { component: GaugesWatchStyleTrack, width: 512.0, height: 512.0, kind: "composite", group: "gauges", shapeCount: 33 },
  "gauges/watch/style-track/frame-scale": { component: GaugesWatchStyleTrackFrameScale, width: 368.0, height: 368.0, kind: "leaf", group: "gauges", shapeCount: 33 },
  "gauges/watch/style-timeline": { component: GaugesWatchStyleTimeline, width: 512.0, height: 512.0, kind: "composite", group: "gauges", shapeCount: 36 },
  "gauges/watch/style-timeline/frame-scale": { component: GaugesWatchStyleTimelineFrameScale, width: 368.0, height: 368.0, kind: "leaf", group: "gauges", shapeCount: 36 },
  "gauges/watch/style-square": { component: GaugesWatchStyleSquare, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 27 },
  "gauges/watch/digital-numbers-beta": { component: GaugesWatchDigitalNumbersBeta, width: 466.0, height: 210.0, kind: "composite", group: "gauges", shapeCount: 22 },
  "gauges/watch/digital-numbers-beta/number-1-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber1TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-1-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber1TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-0-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber0TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-0-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber0TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-2-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber2TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-2-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber2TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-3-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber3TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-3-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber3TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-4-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber4TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-4-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber4TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-5-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber5TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-5-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber5TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-6-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber6TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-6-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber6TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-7-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber7TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-7-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber7TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-8-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber8TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-8-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber8TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-9-type-hour": { component: GaugesWatchDigitalNumbersBetaNumber9TypeHour, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/watch/digital-numbers-beta/number-9-type-minute": { component: GaugesWatchDigitalNumbersBetaNumber9TypeMinute, width: 24.0, height: 32.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-top-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignTopTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 9 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area": { component: GaugesGaugeBarGaugeBarHorizontalLabelArea, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-top-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignTopTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-02": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance02, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-bottom-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignBottomTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 9 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-regular-align-bottom-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleRegularAlignBottomTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-bottom-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignBottomTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 9 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-bottom-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignBottomTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-top-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignTopTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-positive": { component: GaugesGaugeBarGaugeBarHorizontalBarPositive, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-negative": { component: GaugesGaugeBarGaugeBarHorizontalBarNegative, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-03": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance03, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-top-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignTopTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-02": { component: GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance02, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-02": { component: GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance02, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-04": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance04, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-bottom-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignBottomTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-regular-align-bottom-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleRegularAlignBottomTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-bottom-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignBottomTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-bottom-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignBottomTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-top-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignTopTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 11 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-07": { component: GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance07, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-07": { component: GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance07, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-05": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance05, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-true-style-enhanced-align-top-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeTrueStyleEnhancedAlignTopTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-positive__instance-08": { component: GaugesGaugeBarGaugeBarHorizontalBarPositiveInstance08, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/bar-negative__instance-08": { component: GaugesGaugeBarGaugeBarHorizontalBarNegativeInstance08, width: 48.0, height: 168.0, kind: "leaf", group: "gauges", shapeCount: 1 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-06": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance06, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-top-type-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignTopTypeBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 9 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-07": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance07, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-bar-horizontal/negative-false-style-enhanced-align-top-type-tint-bar": { component: GaugesGaugeBarGaugeBarHorizontalNegativeFalseStyleEnhancedAlignTopTypeTintBar, width: 384.0, height: 88.0, kind: "leaf", group: "gauges", shapeCount: 10 },
  "gauges/gauge-bar/gauge-bar-horizontal/label-area__instance-08": { component: GaugesGaugeBarGaugeBarHorizontalLabelAreaInstance08, width: 512.0, height: 216.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-right-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentRightTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-vertical/advice": { component: GaugesGaugeBarGaugeVerticalAdvice, width: 512.0, height: 512.0, kind: "composite", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-right-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentRightTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-02": { component: GaugesGaugeBarGaugeVerticalAdviceInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-right-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentRightTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-03": { component: GaugesGaugeBarGaugeVerticalAdviceInstance03, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-right-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentRightTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-04": { component: GaugesGaugeBarGaugeVerticalAdviceInstance04, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-left-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentLeftTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-05": { component: GaugesGaugeBarGaugeVerticalAdviceInstance05, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-regular-alignment-left-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityRegularAlignmentLeftTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-06": { component: GaugesGaugeBarGaugeVerticalAdviceInstance06, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-left-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentLeftTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 12 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-07": { component: GaugesGaugeBarGaugeVerticalAdviceInstance07, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-false-priority-enhanced-alignment-left-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeFalsePriorityEnhancedAlignmentLeftTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 13 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-08": { component: GaugesGaugeBarGaugeVerticalAdviceInstance08, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/advice/negative-true-priority-regular-alignment-right-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalAdviceNegativeTruePriorityRegularAlignmentRightTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-09": { component: GaugesGaugeBarGaugeVerticalAdviceInstance09, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-right-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentRightTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-10": { component: GaugesGaugeBarGaugeVerticalAdviceInstance10, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-right-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentRightTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-11": { component: GaugesGaugeBarGaugeVerticalAdviceInstance11, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-right-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentRightTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 17 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-12": { component: GaugesGaugeBarGaugeVerticalAdviceInstance12, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-left-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentLeftTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 15 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-13": { component: GaugesGaugeBarGaugeVerticalAdviceInstance13, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-regular-alignment-left-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityRegularAlignmentLeftTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-14": { component: GaugesGaugeBarGaugeVerticalAdviceInstance14, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-left-type-fill-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentLeftTypeFillBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 15 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-15": { component: GaugesGaugeBarGaugeVerticalAdviceInstance15, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/negative-true-priority-enhanced-alignment-left-type-tint-bar": { component: GaugesGaugeBarGaugeVerticalNegativeTruePriorityEnhancedAlignmentLeftTypeTintBar, width: 120.0, height: 384.0, kind: "leaf", group: "gauges", shapeCount: 16 },
  "gauges/gauge-bar/gauge-vertical/advice__instance-16": { component: GaugesGaugeBarGaugeVerticalAdviceInstance16, width: 512.0, height: 512.0, kind: "leaf", group: "gauges", shapeCount: 28 },
  "gauges/gauge-bar/gauge-vertical/documentation-text": { component: GaugesGaugeBarGaugeVerticalDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "gauges", shapeCount: 7 },
  "motion/motion-control/surge-sway-yaw": { component: MotionMotionControlSurgeSwayYaw, width: 480.0, height: 1800.0, kind: "composite", group: "motion", shapeCount: 76 },
  "motion/motion-control/surge-sway-yaw/vertical-resize-false": { component: MotionMotionControlSurgeSwayYawVerticalResizeFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 31 },
  "motion/motion-control/surge-sway-yaw/vertical-resize-input-output": { component: MotionMotionControlSurgeSwayYawVerticalResizeInputOutput, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 43 },
  "motion/motion-control/draft-trim": { component: MotionMotionControlDraftTrim, width: 480.0, height: 1800.0, kind: "composite", group: "motion", shapeCount: 56 },
  "motion/motion-control/draft-trim/priority-false": { component: MotionMotionControlDraftTrimPriorityFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/motion-control/draft-trim/draft-fore": { component: MotionMotionControlDraftTrimDraftFore, width: 120.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 11 },
  "motion/motion-control/draft-trim/draft-aft": { component: MotionMotionControlDraftTrimDraftAft, width: 120.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 10 },
  "motion/motion-control/draft-trim/priority-enhanced": { component: MotionMotionControlDraftTrimPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/motion-control/draft-trim/draft-fore__instance-02": { component: MotionMotionControlDraftTrimDraftForeInstance02, width: 120.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 11 },
  "motion/motion-control/draft-trim/draft-aft__instance-02": { component: MotionMotionControlDraftTrimDraftAftInstance02, width: 120.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 10 },
  "motion/motion-control/pos-plot-beta/type-point-trail": { component: MotionMotionControlPosPlotBetaTypePointTrail, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-point-trail/watch-face-pitch-roll-yaw": { component: MotionMotionControlPosPlotBetaTypePointTrailWatchFacePitchRollYaw, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-simple-trail": { component: MotionMotionControlPosPlotBetaTypeSimpleTrail, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-simple-trail/watch-face-pitch-roll-yaw": { component: MotionMotionControlPosPlotBetaTypeSimpleTrailWatchFacePitchRollYaw, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-ship-trail": { component: MotionMotionControlPosPlotBetaTypeShipTrail, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 33 },
  "motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm": { component: MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarm, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 33 },
  "motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm/watch-face-pitch-roll-yaw": { component: MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarmWatchFacePitchRollYaw, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 33 },
  "motion/motion-control/pos-plot-beta/type-ship-trail/pattern-alarm/watch-face-pitch-roll-yaw/instrument": { component: MotionMotionControlPosPlotBetaTypeShipTrailPatternAlarmWatchFacePitchRollYawInstrument, width: 96.0, height: 96.0, kind: "leaf", group: "motion", shapeCount: 1 },
  "motion/motion-control/pos-plot-beta/type-hdg-cog": { component: MotionMotionControlPosPlotBetaTypeHdgCog, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 44 },
  "motion/motion-control/pos-plot-beta/type-hdg-cog/type-trail": { component: MotionMotionControlPosPlotBetaTypeHdgCogTypeTrail, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/motion-control/pos-plot-beta/type-hdg-cog/shape": { component: MotionMotionControlPosPlotBetaTypeHdgCogShape, width: 66.0, height: 312.0, kind: "leaf", group: "motion", shapeCount: 11 },
  "motion/motion-control/pos-plot-beta/type-capacity-plot": { component: MotionMotionControlPosPlotBetaTypeCapacityPlot, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 32 },
  "motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm": { component: MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarm, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 32 },
  "motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm/watch-face-pitch-roll-yaw": { component: MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarmWatchFacePitchRollYaw, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 32 },
  "motion/motion-control/pos-plot-beta/type-capacity-plot/pattern-alarm/watch-face-pitch-roll-yaw/instrument": { component: MotionMotionControlPosPlotBetaTypeCapacityPlotPatternAlarmWatchFacePitchRollYawInstrument, width: 96.0, height: 96.0, kind: "leaf", group: "motion", shapeCount: 1 },
  "motion/motion-control/pos-plot-beta/type-heading": { component: MotionMotionControlPosPlotBetaTypeHeading, width: 384.0, height: 384.0, kind: "composite", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShape, width: 376.0, height: 376.0, kind: "composite", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape__instance-02": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeInstance02, width: 376.0, height: 376.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShape, width: 328.0, height: 328.0, kind: "composite", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape__instance-03": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeInstance03, width: 376.0, height: 376.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape__instance-02": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeInstance02, width: 376.0, height: 376.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape/frame-shape": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeFrameShape, width: 376.0, height: 376.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/motion-control/pos-plot-beta/type-heading/frame-shape/track-shape/frame-shape__instance-02": { component: MotionMotionControlPosPlotBetaTypeHeadingFrameShapeTrackShapeFrameShapeInstance02, width: 376.0, height: 376.0, kind: "leaf", group: "motion", shapeCount: 23 },
  "motion/forces/slamming": { component: MotionForcesSlamming, width: 512.0, height: 972.0, kind: "composite", group: "motion", shapeCount: 70 },
  "motion/forces/slamming/style-enhanced": { component: MotionForcesSlammingStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 34 },
  "motion/forces/slamming/style-regular": { component: MotionForcesSlammingStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 34 },
  "motion/forces/vibrations": { component: MotionForcesVibrations, width: 512.0, height: 972.0, kind: "composite", group: "motion", shapeCount: 100 },
  "motion/forces/vibrations/style-regular": { component: MotionForcesVibrationsStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 49 },
  "motion/forces/vibrations/style-enhanced": { component: MotionForcesVibrationsStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 49 },
  "motion/6-dof/pitch/type-single-scale-style-regular-has-readout-false": { component: Motion6DofPitchTypeSingleScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness": { component: Motion6DofPitchThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-single-scale-style-regular-has-readout-true": { component: Motion6DofPitchTypeSingleScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 21 },
  "motion/6-dof/pitch/thickness__instance-02": { component: Motion6DofPitchThicknessInstance02, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-dual-scale-style-regular-has-readout-false": { component: Motion6DofPitchTypeDualScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/pitch/thickness__instance-03": { component: Motion6DofPitchThicknessInstance03, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness__instance-04": { component: Motion6DofPitchThicknessInstance04, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-dual-scale-style-regular-has-readout-true": { component: Motion6DofPitchTypeDualScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 28 },
  "motion/6-dof/pitch/thickness__instance-05": { component: Motion6DofPitchThicknessInstance05, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness__instance-06": { component: Motion6DofPitchThicknessInstance06, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-dual-scale-style-enhanced-has-readout-false": { component: Motion6DofPitchTypeDualScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/pitch/thickness__instance-07": { component: Motion6DofPitchThicknessInstance07, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness__instance-08": { component: Motion6DofPitchThicknessInstance08, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-dual-scale-style-enhanced-has-readout-true": { component: Motion6DofPitchTypeDualScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 28 },
  "motion/6-dof/pitch/thickness__instance-09": { component: Motion6DofPitchThicknessInstance09, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness__instance-10": { component: Motion6DofPitchThicknessInstance10, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-single-scale-style-enhanced-has-readout-false": { component: Motion6DofPitchTypeSingleScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/thickness__instance-11": { component: Motion6DofPitchThicknessInstance11, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch/type-single-scale-style-enhanced-has-readout-true": { component: Motion6DofPitchTypeSingleScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 21 },
  "motion/6-dof/pitch/thickness__instance-12": { component: Motion6DofPitchThicknessInstance12, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 20 },
  "motion/6-dof/pitch-roll/type-dual-scale-style-regular-has-readout-false": { component: Motion6DofPitchRollTypeDualScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 59 },
  "motion/6-dof/pitch-roll/thickness": { component: Motion6DofPitchRollThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-02": { component: Motion6DofPitchRollThicknessInstance02, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-dual-scale-style-regular-has-readout-true": { component: Motion6DofPitchRollTypeDualScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 53 },
  "motion/6-dof/pitch-roll/thickness__instance-03": { component: Motion6DofPitchRollThicknessInstance03, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-04": { component: Motion6DofPitchRollThicknessInstance04, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-dual-scale-style-enhanced-has-readout-false": { component: Motion6DofPitchRollTypeDualScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 57 },
  "motion/6-dof/pitch-roll/thickness__instance-05": { component: Motion6DofPitchRollThicknessInstance05, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-06": { component: Motion6DofPitchRollThicknessInstance06, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-dual-scale-style-enhanced-has-readout-true": { component: Motion6DofPitchRollTypeDualScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 53 },
  "motion/6-dof/pitch-roll/thickness__instance-07": { component: Motion6DofPitchRollThicknessInstance07, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-08": { component: Motion6DofPitchRollThicknessInstance08, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-single-scale-style-regular-has-readout-false": { component: Motion6DofPitchRollTypeSingleScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-09": { component: Motion6DofPitchRollThicknessInstance09, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-single-scale-style-regular-has-readout-true": { component: Motion6DofPitchRollTypeSingleScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 40 },
  "motion/6-dof/pitch-roll/thickness__instance-10": { component: Motion6DofPitchRollThicknessInstance10, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-single-scale-style-enhanced-has-readout-false": { component: Motion6DofPitchRollTypeSingleScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/thickness__instance-11": { component: Motion6DofPitchRollThicknessInstance11, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll/type-single-scale-style-enhanced-has-readout-true": { component: Motion6DofPitchRollTypeSingleScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 40 },
  "motion/6-dof/pitch-roll/thickness__instance-12": { component: Motion6DofPitchRollThicknessInstance12, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 46 },
  "motion/6-dof/pitch-roll-heave/type-dual-scale-style-regular": { component: Motion6DofPitchRollHeaveTypeDualScaleStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 56 },
  "motion/6-dof/pitch-roll-heave/thickness": { component: Motion6DofPitchRollHeaveThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-02": { component: Motion6DofPitchRollHeaveThicknessInstance02, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/type-dual-scale-style-enhanced": { component: Motion6DofPitchRollHeaveTypeDualScaleStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 56 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-03": { component: Motion6DofPitchRollHeaveThicknessInstance03, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-04": { component: Motion6DofPitchRollHeaveThicknessInstance04, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/type-single-scale-style-regular": { component: Motion6DofPitchRollHeaveTypeSingleScaleStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-05": { component: Motion6DofPitchRollHeaveThicknessInstance05, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/type-readout-style-regular": { component: Motion6DofPitchRollHeaveTypeReadoutStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 57 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-06": { component: Motion6DofPitchRollHeaveThicknessInstance06, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/type-readout-style-enhanced": { component: Motion6DofPitchRollHeaveTypeReadoutStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 57 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-07": { component: Motion6DofPitchRollHeaveThicknessInstance07, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/type-single-scale-style-enhanced": { component: Motion6DofPitchRollHeaveTypeSingleScaleStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/pitch-roll-heave/thickness__instance-08": { component: Motion6DofPitchRollHeaveThicknessInstance08, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 55 },
  "motion/6-dof/heave": { component: Motion6DofHeave, width: 736.0, height: 1800.0, kind: "composite", group: "motion", shapeCount: 80 },
  "motion/6-dof/heave/type-bar-style-enhanced": { component: Motion6DofHeaveTypeBarStyleEnhanced, width: 128.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 12 },
  "motion/6-dof/heave/type-vessel-style-enhanced": { component: Motion6DofHeaveTypeVesselStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/watch-face-heave": { component: Motion6DofHeaveWatchFaceHeave, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/watch-face-heave/heave-bar": { component: Motion6DofHeaveWatchFaceHeaveHeaveBar, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/type-vessel-style-regular": { component: Motion6DofHeaveTypeVesselStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/watch-face-heave__instance-02": { component: Motion6DofHeaveWatchFaceHeaveInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/watch-face-heave/heave-bar__instance-02": { component: Motion6DofHeaveWatchFaceHeaveHeaveBarInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 27 },
  "motion/6-dof/heave/watch-face-heave/heave-bar/type-bar-style-regular": { component: Motion6DofHeaveWatchFaceHeaveHeaveBarTypeBarStyleRegular, width: 128.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 12 },
  "motion/6-dof/roll/type-single-scale-style-enhanced-has-readout-false": { component: Motion6DofRollTypeSingleScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 30 },
  "motion/6-dof/roll/thickness": { component: Motion6DofRollThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-single-scale-style-regular-has-readout-false": { component: Motion6DofRollTypeSingleScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 30 },
  "motion/6-dof/roll/thickness__instance-02": { component: Motion6DofRollThicknessInstance02, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-single-scale-style-regular-has-readout-true": { component: Motion6DofRollTypeSingleScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 21 },
  "motion/6-dof/roll/thickness__instance-03": { component: Motion6DofRollThicknessInstance03, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-single-scale-style-enhanced-has-readout-true": { component: Motion6DofRollTypeSingleScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 21 },
  "motion/6-dof/roll/thickness__instance-04": { component: Motion6DofRollThicknessInstance04, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-dual-scale-style-regular-has-readout-false": { component: Motion6DofRollTypeDualScaleStyleRegularHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-05": { component: Motion6DofRollThicknessInstance05, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-06": { component: Motion6DofRollThicknessInstance06, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-dual-scale-style-regular-has-readout-true": { component: Motion6DofRollTypeDualScaleStyleRegularHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 28 },
  "motion/6-dof/roll/thickness__instance-07": { component: Motion6DofRollThicknessInstance07, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-08": { component: Motion6DofRollThicknessInstance08, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-dual-scale-style-enhanced-has-readout-false": { component: Motion6DofRollTypeDualScaleStyleEnhancedHasReadoutFalse, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-09": { component: Motion6DofRollThicknessInstance09, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-10": { component: Motion6DofRollThicknessInstance10, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/type-dual-scale-style-enhanced-has-readout-true": { component: Motion6DofRollTypeDualScaleStyleEnhancedHasReadoutTrue, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 28 },
  "motion/6-dof/roll/thickness__instance-11": { component: Motion6DofRollThicknessInstance11, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/thickness__instance-12": { component: Motion6DofRollThicknessInstance12, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/roll/documentation-text": { component: Motion6DofRollDocumentationText, width: 792.0, height: 144.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-level-style-regular": { component: Motion6DofPitchRollYawTypeLevelStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/bar-area": { component: Motion6DofPitchRollYawBarArea, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-level-style-enhanced": { component: Motion6DofPitchRollYawTypeLevelStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/bar-area__instance-02": { component: Motion6DofPitchRollYawBarAreaInstance02, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-actual-motion-style-regular": { component: Motion6DofPitchRollYawTypeActualMotionStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/pitch-roll-yaw/bar-area__instance-03": { component: Motion6DofPitchRollYawBarAreaInstance03, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-actual-motion-style-enhanced": { component: Motion6DofPitchRollYawTypeActualMotionStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/pitch-roll-yaw/bar-area__instance-04": { component: Motion6DofPitchRollYawBarAreaInstance04, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-historical-otion-style-regular": { component: Motion6DofPitchRollYawTypeHistoricalOtionStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/pitch-roll-yaw/bar-area__instance-05": { component: Motion6DofPitchRollYawBarAreaInstance05, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/pitch-roll-yaw/type-historical-otion-style-enhanced": { component: Motion6DofPitchRollYawTypeHistoricalOtionStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/pitch-roll-yaw/bar-area__instance-06": { component: Motion6DofPitchRollYawBarAreaInstance06, width: 368.0, height: 368.0, kind: "leaf", group: "motion", shapeCount: 17 },
  "motion/6-dof/attitude-indicator/style-regular-priority-regular": { component: Motion6DofAttitudeIndicatorStyleRegularPriorityRegular, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/attitude-indicator/style-style4-priority-enhanced": { component: Motion6DofAttitudeIndicatorStyleStyle4PriorityEnhanced, width: 512.0, height: 512.0, kind: "leaf", group: "motion", shapeCount: 24 },
  "motion/6-dof/attitude-indicator/style-speed-depth-priority-regular": { component: Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityRegular, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 48 },
  "motion/6-dof/attitude-indicator/style-speed-depth-priority-regular/thickness": { component: Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityRegularThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 37 },
  "motion/6-dof/attitude-indicator/style-speed-depth-priority-enhanced": { component: Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityEnhanced, width: 512.0, height: 512.0, kind: "composite", group: "motion", shapeCount: 37 },
  "motion/6-dof/attitude-indicator/style-speed-depth-priority-enhanced/thickness": { component: Motion6DofAttitudeIndicatorStyleSpeedDepthPriorityEnhancedThickness, width: 384.0, height: 384.0, kind: "leaf", group: "motion", shapeCount: 30 },
  "propulsion/azimuth-thruster/state-false-priority-regular": { component: PropulsionAzimuthThrusterStateFalsePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/azimuth-thruster/state-false-priority-in-command": { component: PropulsionAzimuthThrusterStateFalsePriorityInCommand, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/azimuth-thruster/state-input-change-priority-regular": { component: PropulsionAzimuthThrusterStateInputChangePriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/azimuth-thruster/state-input-change-priority-in-command": { component: PropulsionAzimuthThrusterStateInputChangePriorityInCommand, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/azimuth-thruster/state-ready-priority-regular": { component: PropulsionAzimuthThrusterStateReadyPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 21 },
  "propulsion/azimuth-thruster/state-ready-priority-in-command": { component: PropulsionAzimuthThrusterStateReadyPriorityInCommand, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 21 },
  "propulsion/azimuth-thruster/state-loading-priority-regular": { component: PropulsionAzimuthThrusterStateLoadingPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 43 },
  "propulsion/azimuth-thruster/state-loading-priority-in-command": { component: PropulsionAzimuthThrusterStateLoadingPriorityInCommand, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 43 },
  "propulsion/azimuth-thruster/state-off-priority-regular": { component: PropulsionAzimuthThrusterStateOffPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/azimuth-thruster/state-off-priority-in-command": { component: PropulsionAzimuthThrusterStateOffPriorityInCommand, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/azimuth-thruster/documentation-text": { component: PropulsionAzimuthThrusterDocumentationText, width: 792.0, height: 200.0, kind: "leaf", group: "propulsion", shapeCount: 30 },
  "propulsion/tunnel-thruster/priority-regular-style-bar-state-active": { component: PropulsionTunnelThrusterPriorityRegularStyleBarStateActive, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/tunnel-thruster/priority-regular-style-bar-state-input": { component: PropulsionTunnelThrusterPriorityRegularStyleBarStateInput, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/tunnel-thruster/priority-regular-style-bar-state-ready": { component: PropulsionTunnelThrusterPriorityRegularStyleBarStateReady, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/tunnel-thruster/priority-regular-style-bar-state-loading": { component: PropulsionTunnelThrusterPriorityRegularStyleBarStateLoading, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/tunnel-thruster/priority-regular-style-bar-state-off": { component: PropulsionTunnelThrusterPriorityRegularStyleBarStateOff, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 9 },
  "propulsion/tunnel-thruster/priority-in-command-style-bar-state-active": { component: PropulsionTunnelThrusterPriorityInCommandStyleBarStateActive, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/tunnel-thruster/priority-in-command-style-bar-state-input": { component: PropulsionTunnelThrusterPriorityInCommandStyleBarStateInput, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/tunnel-thruster/priority-in-command-style-bar-state-ready": { component: PropulsionTunnelThrusterPriorityInCommandStyleBarStateReady, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/tunnel-thruster/priority-in-command-style-bar-state-loading": { component: PropulsionTunnelThrusterPriorityInCommandStyleBarStateLoading, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/tunnel-thruster/priority-in-command-style-bar-state-off": { component: PropulsionTunnelThrusterPriorityInCommandStyleBarStateOff, width: 384.0, height: 120.0, kind: "leaf", group: "propulsion", shapeCount: 9 },
  "propulsion/tunnel-thruster/priority-regular-style-propellar-state-active": { component: PropulsionTunnelThrusterPriorityRegularStylePropellarStateActive, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/tunnel-thruster/priority-regular-style-propellar-state-input": { component: PropulsionTunnelThrusterPriorityRegularStylePropellarStateInput, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/tunnel-thruster/priority-regular-style-propellar-state-ready": { component: PropulsionTunnelThrusterPriorityRegularStylePropellarStateReady, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 21 },
  "propulsion/tunnel-thruster/priority-regular-style-propellar-state-loading": { component: PropulsionTunnelThrusterPriorityRegularStylePropellarStateLoading, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/tunnel-thruster/priority-regular-style-propellar-state-off": { component: PropulsionTunnelThrusterPriorityRegularStylePropellarStateOff, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/tunnel-thruster/priority-in-command-style-propellar-state-active": { component: PropulsionTunnelThrusterPriorityInCommandStylePropellarStateActive, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/tunnel-thruster/priority-in-command-style-propellar-state-input": { component: PropulsionTunnelThrusterPriorityInCommandStylePropellarStateInput, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/tunnel-thruster/priority-in-command-style-propellar-state-ready": { component: PropulsionTunnelThrusterPriorityInCommandStylePropellarStateReady, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 21 },
  "propulsion/tunnel-thruster/priority-in-command-style-propellar-state-loading": { component: PropulsionTunnelThrusterPriorityInCommandStylePropellarStateLoading, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/tunnel-thruster/priority-in-command-style-propellar-state-off": { component: PropulsionTunnelThrusterPriorityInCommandStylePropellarStateOff, width: 384.0, height: 168.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/tunnel-thruster/documentation-text": { component: PropulsionTunnelThrusterDocumentationText, width: 792.0, height: 172.0, kind: "leaf", group: "propulsion", shapeCount: 26 },
  "propulsion/wind-propulsion": { component: PropulsionWindPropulsion, width: 480.0, height: 1536.0, kind: "composite", group: "propulsion", shapeCount: 62 },
  "propulsion/wind-propulsion/priority-enhanced-force-resultant": { component: PropulsionWindPropulsionPriorityEnhancedForceResultant, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/wind-propulsion/priority-enhanced-force-split": { component: PropulsionWindPropulsionPriorityEnhancedForceSplit, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 20 },
  "propulsion/wind-propulsion/priority-enhanced-force-side-thrust": { component: PropulsionWindPropulsionPriorityEnhancedForceSideThrust, width: 384.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 24 },
  "propulsion/rudder/priority-in-command-style-rudder-state-active": { component: PropulsionRudderPriorityInCommandStyleRudderStateActive, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/rudder/priority-regular-style-rudder-state-active": { component: PropulsionRudderPriorityRegularStyleRudderStateActive, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/rudder/priority-regular-style-rudder-state-input": { component: PropulsionRudderPriorityRegularStyleRudderStateInput, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/rudder/priority-in-command-style-rudder-state-input": { component: PropulsionRudderPriorityInCommandStyleRudderStateInput, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/rudder/priority-regular-style-rudder-state-ready": { component: PropulsionRudderPriorityRegularStyleRudderStateReady, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/rudder/priority-in-command-style-rudder-state-ready": { component: PropulsionRudderPriorityInCommandStyleRudderStateReady, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/rudder/priority-regular-style-rudder-state-loading": { component: PropulsionRudderPriorityRegularStyleRudderStateLoading, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/rudder/priority-in-command-style-rudder-state-loading": { component: PropulsionRudderPriorityInCommandStyleRudderStateLoading, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/rudder/priority-regular-style-rudder-state-off": { component: PropulsionRudderPriorityRegularStyleRudderStateOff, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/rudder/priority-in-command-style-rudder-state-off": { component: PropulsionRudderPriorityInCommandStyleRudderStateOff, width: 384.0, height: 216.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/rudder/priority-regular-style-bar-state-active": { component: PropulsionRudderPriorityRegularStyleBarStateActive, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/rudder/priority-in-command-style-bar-state-active": { component: PropulsionRudderPriorityInCommandStyleBarStateActive, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/rudder/priority-regular-style-bar-state-ready": { component: PropulsionRudderPriorityRegularStyleBarStateReady, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 8 },
  "propulsion/rudder/priority-in-command-style-bar-state-ready": { component: PropulsionRudderPriorityInCommandStyleBarStateReady, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 8 },
  "propulsion/rudder/priority-regular-style-bar-state-loading": { component: PropulsionRudderPriorityRegularStyleBarStateLoading, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 7 },
  "propulsion/rudder/priority-in-command-style-bar-state-loading": { component: PropulsionRudderPriorityInCommandStyleBarStateLoading, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 7 },
  "propulsion/rudder/priority-regular-style-bar-state-off": { component: PropulsionRudderPriorityRegularStyleBarStateOff, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 5 },
  "propulsion/rudder/priority-in-command-style-bar-state-off": { component: PropulsionRudderPriorityInCommandStyleBarStateOff, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 5 },
  "propulsion/rudder/priority-regular-style-bar-state-input": { component: PropulsionRudderPriorityRegularStyleBarStateInput, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/rudder/priority-in-command-style-bar-state-input": { component: PropulsionRudderPriorityInCommandStyleBarStateInput, width: 384.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 10 },
  "propulsion/rudder/documentation-text": { component: PropulsionRudderDocumentationText, width: 792.0, height: 144.0, kind: "leaf", group: "propulsion", shapeCount: 24 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-active": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateActive, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-active": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateActive, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-input": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateInput, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-input": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateInput, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 23 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-ready": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateReady, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-ready": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateReady, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 18 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-loading": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateLoading, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-loading": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateLoading, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 16 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-regular-state-off": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityRegularStateOff, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 15 },
  "propulsion/main-engine/style-bar-type-pitch-rpm-priority-in-command-state-off": { component: PropulsionMainEngineStyleBarTypePitchRpmPriorityInCommandStateOff, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 15 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-active": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateActive, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 29 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-active": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateActive, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 29 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-input": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateInput, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 29 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-input": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateInput, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 29 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-ready": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateReady, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 24 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-ready": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateReady, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 24 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-loading": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateLoading, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-loading": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateLoading, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-off": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityRegularStateOff, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-off": { component: PropulsionMainEngineStylePropellarTypePitchRpmPriorityInCommandStateOff, width: 216.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 22 },
  "propulsion/main-engine/style-bar-type-power-priority-regular-state-active": { component: PropulsionMainEngineStyleBarTypePowerPriorityRegularStateActive, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/main-engine/style-bar-type-power-priority-in-command-state-active": { component: PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateActive, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/main-engine/style-bar-type-power-priority-regular-state-input": { component: PropulsionMainEngineStyleBarTypePowerPriorityRegularStateInput, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/main-engine/style-bar-type-power-priority-in-command-state-input": { component: PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateInput, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 13 },
  "propulsion/main-engine/style-bar-type-power-priority-regular-state-ready": { component: PropulsionMainEngineStyleBarTypePowerPriorityRegularStateReady, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 12 },
  "propulsion/main-engine/style-bar-type-power-priority-in-command-state-ready": { component: PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateReady, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 12 },
  "propulsion/main-engine/style-bar-type-power-priority-regular-state-loading": { component: PropulsionMainEngineStyleBarTypePowerPriorityRegularStateLoading, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/main-engine/style-bar-type-power-priority-in-command-state-loading": { component: PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateLoading, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 11 },
  "propulsion/main-engine/style-bar-type-power-priority-regular-state-off": { component: PropulsionMainEngineStyleBarTypePowerPriorityRegularStateOff, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 9 },
  "propulsion/main-engine/style-bar-type-power-priority-in-command-state-off": { component: PropulsionMainEngineStyleBarTypePowerPriorityInCommandStateOff, width: 120.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 9 },
  "propulsion/main-engine/style-propellar-type-power-priority-regular-state-active": { component: PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateActive, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/main-engine/style-propellar-type-power-priority-in-command-state-active": { component: PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateActive, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/main-engine/style-propellar-type-power-priority-regular-state-input": { component: PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateInput, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/main-engine/style-propellar-type-power-priority-in-command-state-input": { component: PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateInput, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 19 },
  "propulsion/main-engine/style-propellar-type-power-priority-regular-state-ready": { component: PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateReady, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 18 },
  "propulsion/main-engine/style-propellar-type-power-priority-in-command-state-ready": { component: PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateReady, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 18 },
  "propulsion/main-engine/style-propellar-type-power-priority-regular-state-loading": { component: PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateLoading, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/main-engine/style-propellar-type-power-priority-in-command-state-loading": { component: PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateLoading, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 17 },
  "propulsion/main-engine/style-propellar-type-power-priority-regular-state-off": { component: PropulsionMainEngineStylePropellarTypePowerPriorityRegularStateOff, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 15 },
  "propulsion/main-engine/style-propellar-type-power-priority-in-command-state-off": { component: PropulsionMainEngineStylePropellarTypePowerPriorityInCommandStateOff, width: 160.0, height: 384.0, kind: "leaf", group: "propulsion", shapeCount: 15 },
  "propulsion/main-engine/documentation-text": { component: PropulsionMainEngineDocumentationText, width: 792.0, height: 172.0, kind: "leaf", group: "propulsion", shapeCount: 20 },
  "navigation/compass/compass-linear": { component: NavigationCompassCompassLinear, width: 951.0, height: 1221.0, kind: "composite", group: "navigation", shapeCount: 132 },
  "navigation/compass/compass-linear/has-readout-false-style-regular": { component: NavigationCompassCompassLinearHasReadoutFalseStyleRegular, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 19 },
  "navigation/compass/compass-linear/has-readout-false-style-enhanced": { component: NavigationCompassCompassLinearHasReadoutFalseStyleEnhanced, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 19 },
  "navigation/compass/compass-linear/has-readout-true-style-regular": { component: NavigationCompassCompassLinearHasReadoutTrueStyleRegular, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 28 },
  "navigation/compass/compass-linear/has-readout-true-style-enhanced": { component: NavigationCompassCompassLinearHasReadoutTrueStyleEnhanced, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 28 },
  "navigation/compass/compass-radial/type-regular-priority-enhanced": { component: NavigationCompassCompassRadialTypeRegularPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 34 },
  "navigation/compass/compass-radial/type-environment-data-priority-enhanced": { component: NavigationCompassCompassRadialTypeEnvironmentDataPriorityEnhanced, width: 512.0, height: 512.0, kind: "leaf", group: "navigation", shapeCount: 38 },
  "navigation/compass/compass-radial/type-map-graphics-priority-enhanced": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhanced, width: 512.0, height: 512.0, kind: "composite", group: "navigation", shapeCount: 44 },
  "navigation/compass/compass-radial/type-map-graphics-priority-enhanced/bar-area": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhancedBarArea, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 12 },
  "navigation/compass/compass-radial/type-map-graphics-priority-enhanced/shape": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityEnhancedShape, width: 66.0, height: 317.0, kind: "leaf", group: "navigation", shapeCount: 9 },
  "navigation/compass/compass-radial/type-center-label-priority-enhanced": { component: NavigationCompassCompassRadialTypeCenterLabelPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 39 },
  "navigation/compass/compass-radial/type-regular-priority-regular": { component: NavigationCompassCompassRadialTypeRegularPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 33 },
  "navigation/compass/compass-radial/type-environment-data-priority-regular": { component: NavigationCompassCompassRadialTypeEnvironmentDataPriorityRegular, width: 512.0, height: 512.0, kind: "leaf", group: "navigation", shapeCount: 38 },
  "navigation/compass/compass-radial/type-map-graphics-priority-regular": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityRegular, width: 512.0, height: 512.0, kind: "composite", group: "navigation", shapeCount: 44 },
  "navigation/compass/compass-radial/type-map-graphics-priority-regular/bar-area": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityRegularBarArea, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 12 },
  "navigation/compass/compass-radial/type-map-graphics-priority-regular/shape": { component: NavigationCompassCompassRadialTypeMapGraphicsPriorityRegularShape, width: 66.0, height: 317.0, kind: "leaf", group: "navigation", shapeCount: 9 },
  "navigation/compass/compass-radial/type-center-label-priority-regular": { component: NavigationCompassCompassRadialTypeCenterLabelPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 39 },
  "navigation/compass/compass-sector": { component: NavigationCompassCompassSector, width: 944.0, height: 1221.0, kind: "composite", group: "navigation", shapeCount: 150 },
  "navigation/compass/compass-sector/style-regular-has-readout-false": { component: NavigationCompassCompassSectorStyleRegularHasReadoutFalse, width: 384.0, height: 152.0, kind: "leaf", group: "navigation", shapeCount: 16 },
  "navigation/compass/compass-sector/bar-area": { component: NavigationCompassCompassSectorBarArea, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 6 },
  "navigation/compass/compass-sector/style-regular-has-readout-true": { component: NavigationCompassCompassSectorStyleRegularHasReadoutTrue, width: 384.0, height: 184.0, kind: "leaf", group: "navigation", shapeCount: 31 },
  "navigation/compass/compass-sector/bar-area__instance-02": { component: NavigationCompassCompassSectorBarAreaInstance02, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 6 },
  "navigation/compass/compass-sector/style-enhanced-has-readout-true": { component: NavigationCompassCompassSectorStyleEnhancedHasReadoutTrue, width: 384.0, height: 184.0, kind: "leaf", group: "navigation", shapeCount: 34 },
  "navigation/compass/compass-sector/bar-area__instance-03": { component: NavigationCompassCompassSectorBarAreaInstance03, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 6 },
  "navigation/compass/compass-sector/style-enhanced-has-readout-false": { component: NavigationCompassCompassSectorStyleEnhancedHasReadoutFalse, width: 384.0, height: 152.0, kind: "leaf", group: "navigation", shapeCount: 19 },
  "navigation/compass/compass-sector/bar-area__instance-04": { component: NavigationCompassCompassSectorBarAreaInstance04, width: 224.0, height: 224.0, kind: "leaf", group: "navigation", shapeCount: 6 },
  "navigation/compass/compass-sector/documentation-text": { component: NavigationCompassCompassSectorDocumentationText, width: 792.0, height: 200.0, kind: "leaf", group: "navigation", shapeCount: 48 },
  "navigation/rate-of-turn/rot-sector": { component: NavigationRateOfTurnRotSector, width: 1017.0, height: 1417.0, kind: "composite", group: "navigation", shapeCount: 107 },
  "navigation/rate-of-turn/rot-sector/style-regular-center-label-false": { component: NavigationRateOfTurnRotSectorStyleRegularCenterLabelFalse, width: 384.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 9 },
  "navigation/rate-of-turn/rot-sector/style-enhanced-center-label-false": { component: NavigationRateOfTurnRotSectorStyleEnhancedCenterLabelFalse, width: 384.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 9 },
  "navigation/rate-of-turn/rot-sector/style-port-stbd-center-label-false": { component: NavigationRateOfTurnRotSectorStylePortStbdCenterLabelFalse, width: 384.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 9 },
  "navigation/rate-of-turn/rot-sector/style-regular-center-label-true": { component: NavigationRateOfTurnRotSectorStyleRegularCenterLabelTrue, width: 384.0, height: 160.0, kind: "leaf", group: "navigation", shapeCount: 14 },
  "navigation/rate-of-turn/rot-sector/style-enhanced-center-label-true": { component: NavigationRateOfTurnRotSectorStyleEnhancedCenterLabelTrue, width: 384.0, height: 160.0, kind: "leaf", group: "navigation", shapeCount: 14 },
  "navigation/rate-of-turn/rot-sector/style-port-stbd-center-label-true": { component: NavigationRateOfTurnRotSectorStylePortStbdCenterLabelTrue, width: 384.0, height: 160.0, kind: "leaf", group: "navigation", shapeCount: 14 },
  "navigation/rate-of-turn/rot-sector/documentation-text": { component: NavigationRateOfTurnRotSectorDocumentationText, width: 792.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 23 },
  "navigation/rate-of-turn/rot-radial": { component: NavigationRateOfTurnRotRadial, width: 960.0, height: 1417.0, kind: "composite", group: "navigation", shapeCount: 104 },
  "navigation/rate-of-turn/rot-radial/type-dots-style-regular": { component: NavigationRateOfTurnRotRadialTypeDotsStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 12 },
  "navigation/rate-of-turn/rot-radial/type-dots-style-enhanced": { component: NavigationRateOfTurnRotRadialTypeDotsStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 12 },
  "navigation/rate-of-turn/rot-radial/type-dots-style-port-stbd": { component: NavigationRateOfTurnRotRadialTypeDotsStylePortStbd, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 12 },
  "navigation/rate-of-turn/rot-radial/type-bar-style-regular": { component: NavigationRateOfTurnRotRadialTypeBarStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 22 },
  "navigation/rate-of-turn/rot-radial/type-bar-style-enhanced": { component: NavigationRateOfTurnRotRadialTypeBarStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 22 },
  "navigation/rate-of-turn/rot-radial/type-bar-style-port-stbd": { component: NavigationRateOfTurnRotRadialTypeBarStylePortStbd, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 22 },
  "navigation/rate-of-turn/rot-linear": { component: NavigationRateOfTurnRotLinear, width: 914.0, height: 1417.0, kind: "composite", group: "navigation", shapeCount: 107 },
  "navigation/rate-of-turn/rot-linear/type-bar-style-regular": { component: NavigationRateOfTurnRotLinearTypeBarStyleRegular, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 15 },
  "navigation/rate-of-turn/rot-linear/type-bar-style-port-stbd": { component: NavigationRateOfTurnRotLinearTypeBarStylePortStbd, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 15 },
  "navigation/rate-of-turn/rot-linear/type-bar-style-enhaced": { component: NavigationRateOfTurnRotLinearTypeBarStyleEnhaced, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 15 },
  "navigation/rate-of-turn/rot-linear/type-bar-readout-style-regular": { component: NavigationRateOfTurnRotLinearTypeBarReadoutStyleRegular, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/rate-of-turn/rot-linear/type-bar-readout-style-port-stbd": { component: NavigationRateOfTurnRotLinearTypeBarReadoutStylePortStbd, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/rate-of-turn/rot-linear/type-bar-readout-style-enhaced": { component: NavigationRateOfTurnRotLinearTypeBarReadoutStyleEnhaced, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/heading/heading-radial/type-regular-scaling-proportional-priority-enhanced": { component: NavigationHeadingHeadingRadialTypeRegularScalingProportionalPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 15 },
  "navigation/heading/heading-radial/type-regular-scaling-proportional-priority-regular": { component: NavigationHeadingHeadingRadialTypeRegularScalingProportionalPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 17 },
  "navigation/heading/heading-radial/type-vessel-type-scaling-proportional-priority-regular": { component: NavigationHeadingHeadingRadialTypeVesselTypeScalingProportionalPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 29 },
  "navigation/heading/heading-radial/type-vessel-type-scaling-proportional-priority-enhanced": { component: NavigationHeadingHeadingRadialTypeVesselTypeScalingProportionalPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 29 },
  "navigation/heading/heading-radial/type-center-label-scaling-proportional-priority-regular": { component: NavigationHeadingHeadingRadialTypeCenterLabelScalingProportionalPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 27 },
  "navigation/heading/heading-radial/type-center-label-scaling-proportional-priority-enhanced": { component: NavigationHeadingHeadingRadialTypeCenterLabelScalingProportionalPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 27 },
  "navigation/heading/heading-radial/type-track-scaling-proportional-priority-enhanced": { component: NavigationHeadingHeadingRadialTypeTrackScalingProportionalPriorityEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 24 },
  "navigation/heading/heading-radial/shape__instance-08": { component: NavigationHeadingHeadingRadialShapeInstance08, width: 66.0, height: 317.0, kind: "leaf", group: "navigation", shapeCount: 3 },
  "navigation/heading/heading-radial/type-track-scaling-proportional-priority-regular": { component: NavigationHeadingHeadingRadialTypeTrackScalingProportionalPriorityRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 24 },
  "navigation/heading/heading-radial/shape__instance-10": { component: NavigationHeadingHeadingRadialShapeInstance10, width: 66.0, height: 317.0, kind: "leaf", group: "navigation", shapeCount: 3 },
  "navigation/heading/heading-radial/documentation-text": { component: NavigationHeadingHeadingRadialDocumentationText, width: 792.0, height: 172.0, kind: "leaf", group: "navigation", shapeCount: 14 },
  "navigation/heading/heading-sector": { component: NavigationHeadingHeadingSector, width: 923.0, height: 1433.0, kind: "composite", group: "navigation", shapeCount: 104 },
  "navigation/heading/heading-sector/type-regular-style-enhanced": { component: NavigationHeadingHeadingSectorTypeRegularStyleEnhanced, width: 384.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 11 },
  "navigation/heading/heading-sector/type-regular-style-regular": { component: NavigationHeadingHeadingSectorTypeRegularStyleRegular, width: 384.0, height: 144.0, kind: "leaf", group: "navigation", shapeCount: 11 },
  "navigation/heading/heading-sector/type-center-label-style-enhanced": { component: NavigationHeadingHeadingSectorTypeCenterLabelStyleEnhanced, width: 384.0, height: 160.0, kind: "leaf", group: "navigation", shapeCount: 18 },
  "navigation/heading/heading-sector/type-center-label-style-regular": { component: NavigationHeadingHeadingSectorTypeCenterLabelStyleRegular, width: 384.0, height: 160.0, kind: "leaf", group: "navigation", shapeCount: 18 },
  "navigation/heading/heading-linear": { component: NavigationHeadingHeadingLinear, width: 914.0, height: 1433.0, kind: "composite", group: "navigation", shapeCount: 150 },
  "navigation/heading/heading-linear/type-bar-style-regular": { component: NavigationHeadingHeadingLinearTypeBarStyleRegular, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 18 },
  "navigation/heading/heading-linear/advice": { component: NavigationHeadingHeadingLinearAdvice, width: 512.0, height: 512.0, kind: "composite", group: "navigation", shapeCount: 46 },
  "navigation/heading/heading-linear/type-xtd-style-regular": { component: NavigationHeadingHeadingLinearTypeXtdStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 30 },
  "navigation/heading/heading-linear/type-xtd-style-enhanced": { component: NavigationHeadingHeadingLinearTypeXtdStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 30 },
  "navigation/heading/heading-linear/type-bar-style-enhanced": { component: NavigationHeadingHeadingLinearTypeBarStyleEnhanced, width: 384.0, height: 112.0, kind: "leaf", group: "navigation", shapeCount: 18 },
  "navigation/heading/heading-linear/advice__instance-02": { component: NavigationHeadingHeadingLinearAdviceInstance02, width: 512.0, height: 512.0, kind: "leaf", group: "navigation", shapeCount: 46 },
  "navigation/heading/heading-linear/advice/type-bar-readout-style-regular": { component: NavigationHeadingHeadingLinearAdviceTypeBarReadoutStyleRegular, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 17 },
  "navigation/heading/heading-linear/advice__instance-03": { component: NavigationHeadingHeadingLinearAdviceInstance03, width: 512.0, height: 512.0, kind: "leaf", group: "navigation", shapeCount: 46 },
  "navigation/heading/heading-linear/type-bar-readout-style-enhanced": { component: NavigationHeadingHeadingLinearTypeBarReadoutStyleEnhanced, width: 384.0, height: 168.0, kind: "leaf", group: "navigation", shapeCount: 24 },
  "navigation/heading/heading-linear/advice__instance-04": { component: NavigationHeadingHeadingLinearAdviceInstance04, width: 512.0, height: 512.0, kind: "leaf", group: "navigation", shapeCount: 46 },
  "navigation/speed/speed-arrows": { component: NavigationSpeedSpeedArrows, width: 592.0, height: 880.0, kind: "leaf", group: "navigation", shapeCount: 49 },
  "navigation/speed/speed-arrows-leveled": { component: NavigationSpeedSpeedArrowsLeveled, width: 848.0, height: 560.0, kind: "leaf", group: "navigation", shapeCount: 217 },
  "navigation/speed/speed-directions/documentation-text": { component: NavigationSpeedSpeedDirectionsDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "navigation", shapeCount: 8 },
  "navigation/speed/speed-gauge": { component: NavigationSpeedSpeedGauge, width: 960.0, height: 1440.0, kind: "composite", group: "navigation", shapeCount: 82 },
  "navigation/speed/speed-gauge/type-arrow-style-regular": { component: NavigationSpeedSpeedGaugeTypeArrowStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/speed/speed-gauge/type-arrow-style-enhanced": { component: NavigationSpeedSpeedGaugeTypeArrowStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/speed/speed-gauge/type-bar-style-regular": { component: NavigationSpeedSpeedGaugeTypeBarStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/speed/speed-gauge/type-bar-style-enhanced": { component: NavigationSpeedSpeedGaugeTypeBarStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 20 },
  "navigation/depth/style-none-depth-type-regular": { component: NavigationDepthStyleNoneDepthTypeRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 7 },
  "navigation/depth/style-none-depth-type-prediction": { component: NavigationDepthStyleNoneDepthTypePrediction, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 13 },
  "navigation/depth/style-condenced-depth-type-prediction": { component: NavigationDepthStyleCondencedDepthTypePrediction, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 13 },
  "navigation/depth/style-vessel-scale-depth-type-prediction": { component: NavigationDepthStyleVesselScaleDepthTypePrediction, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 19 },
  "navigation/depth/style-none-depth-type-scanned": { component: NavigationDepthStyleNoneDepthTypeScanned, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 10 },
  "navigation/depth/style-condenced-depth-type-scanned": { component: NavigationDepthStyleCondencedDepthTypeScanned, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 14 },
  "navigation/depth/style-vessel-scale-depth-type-scanned": { component: NavigationDepthStyleVesselScaleDepthTypeScanned, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 19 },
  "navigation/depth/style-condenced-depth-type-regular": { component: NavigationDepthStyleCondencedDepthTypeRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 11 },
  "navigation/depth/style-vessel-scale-depth-type-regular": { component: NavigationDepthStyleVesselScaleDepthTypeRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 16 },
  "navigation/depth/documentation-text": { component: NavigationDepthDocumentationText, width: 792.0, height: 116.0, kind: "leaf", group: "navigation", shapeCount: 1 },
  "navigation/depth/depth-actual": { component: NavigationDepthDepthActual, width: 960.0, height: 1417.0, kind: "composite", group: "navigation", shapeCount: 202 },
  "navigation/depth/depth-actual/type-shallow-style-regular": { component: NavigationDepthDepthActualTypeShallowStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 31 },
  "navigation/depth/depth-actual/type-shallow-style-enhanced": { component: NavigationDepthDepthActualTypeShallowStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 31 },
  "navigation/depth/depth-actual/type-regular-style-regular": { component: NavigationDepthDepthActualTypeRegularStyleRegular, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 38 },
  "navigation/depth/depth-actual/type-regular-style-enhanced": { component: NavigationDepthDepthActualTypeRegularStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 38 },
  "navigation/depth/depth-actual/type-deep-style-port-stbd": { component: NavigationDepthDepthActualTypeDeepStylePortStbd, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 24 },
  "navigation/depth/depth-actual/type-deep-style-enhanced": { component: NavigationDepthDepthActualTypeDeepStyleEnhanced, width: 384.0, height: 384.0, kind: "leaf", group: "navigation", shapeCount: 24 },
  "readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-horizontal-text-stacking-vertical": { component: ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingHorizontalTextStackingVertical, width: 436.0, height: 108.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-vertical-text-stacking-vertical": { component: ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingVerticalTextStackingVertical, width: 418.0, height: 344.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/layout-preset/direction-vertical-readout-stacking-horizontal-text-stacking-vertical": { component: ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingHorizontalTextStackingVertical, width: 363.0, height: 451.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/layout-preset/direction-horizontal-readout-stacking-vertical-text-stacking-horizontal": { component: ReadoutLayoutPresetsLayoutPresetDirectionHorizontalReadoutStackingVerticalTextStackingHorizontal, width: 398.0, height: 192.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/layout-preset/direction-vertical-readout-stacking-vertical-text-stacking-horizontal": { component: ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingVerticalTextStackingHorizontal, width: 198.0, height: 372.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/layout-preset/direction-vertical-readout-stacking-vertical-text-stacking-vertical": { component: ReadoutLayoutPresetsLayoutPresetDirectionVerticalReadoutStackingVerticalTextStackingVertical, width: 972.0, height: 192.0, kind: "leaf", group: "readout", shapeCount: 59 },
  "readout/layout-presets/center-label": { component: ReadoutLayoutPresetsCenterLabel, width: 266.0, height: 1026.0, kind: "composite", group: "readout", shapeCount: 47 },
  "readout/layout-presets/center-label/values-3": { component: ReadoutLayoutPresetsCenterLabelValues3, width: 184.0, height: 184.0, kind: "leaf", group: "readout", shapeCount: 18 },
  "readout/layout-presets/center-label/values-2": { component: ReadoutLayoutPresetsCenterLabelValues2, width: 184.0, height: 184.0, kind: "leaf", group: "readout", shapeCount: 11 },
  "readout/layout-presets/center-label/values-primary-secondary": { component: ReadoutLayoutPresetsCenterLabelValuesPrimarySecondary, width: 184.0, height: 184.0, kind: "leaf", group: "readout", shapeCount: 12 },
  "readout/layout-presets/center-label/values-1": { component: ReadoutLayoutPresetsCenterLabelValues1, width: 184.0, height: 184.0, kind: "leaf", group: "readout", shapeCount: 5 },
  "readout/layout-presets/gauge-readout": { component: ReadoutLayoutPresetsGaugeReadout, width: 634.0, height: 1026.0, kind: "leaf", group: "readout", shapeCount: 25 },
  "readout/readout-group": { component: ReadoutReadoutGroup, width: 1020.0, height: 1182.0, kind: "composite", group: "readout", shapeCount: 241 },
  "readout/readout-group/size-large-direction-vertical-priority-regular": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityRegular, width: 74.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-vertical-priority-low-integrity": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityLowIntegrity, width: 74.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-large-direction-vertical-priority-invalid": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInvalid, width: 74.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-large-direction-vertical-priority-enhanced": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityEnhanced, width: 78.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-vertical-priority-input": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInput, width: 78.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-vertical-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeLargeDirectionVerticalPriorityInputFlipFlop, width: 74.0, height: 52.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-vertical-priority-regular": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityRegular, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-vertical-priority-low-integrity": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityLowIntegrity, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-medium-direction-vertical-priority-invalid": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInvalid, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-medium-direction-vertical-priority-enhanced": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityEnhanced, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-vertical-priority-input": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInput, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-vertical-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeMediumDirectionVerticalPriorityInputFlipFlop, width: 74.0, height: 40.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-horizontal-priority-regular": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityRegular, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-horizontal-priority-low-integrity": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityLowIntegrity, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-medium-direction-horizontal-priority-invalid": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInvalid, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-medium-direction-horizontal-priority-enhanced": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityEnhanced, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-horizontal-priority-input": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInput, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-medium-direction-horizontal-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeMediumDirectionHorizontalPriorityInputFlipFlop, width: 74.0, height: 40.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-vertical-priority-regular": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityRegular, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-vertical-priority-low-integrity": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityLowIntegrity, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-regular-direction-vertical-priority-invalid": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInvalid, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-regular-direction-vertical-priority-enhanced": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityEnhanced, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-vertical-priority-input": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInput, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-vertical-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeRegularDirectionVerticalPriorityInputFlipFlop, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-horizontal-priority-regular": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityRegular, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-horizontal-priority-low-integrity": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityLowIntegrity, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-regular-direction-horizontal-priority-invalid": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInvalid, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-regular-direction-horizontal-priority-enhanced": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityEnhanced, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-horizontal-priority-input": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInput, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-regular-direction-horizontal-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeRegularDirectionHorizontalPriorityInputFlipFlop, width: 74.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-horizontal-priority-regular": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityRegular, width: 109.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-horizontal-priority-low-integrity": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityLowIntegrity, width: 109.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-large-direction-horizontal-priority-invalid": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInvalid, width: 109.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-group/size-large-direction-horizontal-priority-enhanced": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityEnhanced, width: 109.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-horizontal-priority-input": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInput, width: 109.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-group/size-large-direction-horizontal-priority-input-flip-flop": { component: ReadoutReadoutGroupSizeLargeDirectionHorizontalPriorityInputFlipFlop, width: 79.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack": { component: ReadoutReadoutStack, width: 1069.0, height: 1182.0, kind: "composite", group: "readout", shapeCount: 307 },
  "readout/readout-stack/size-large-alignment-vertical-priority-regular": { component: ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityRegular, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-vertical-priority-low-integrity": { component: ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityLowIntegrity, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-vertical-priority-invalid": { component: ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityInvalid, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-vertical-priority-enhanced": { component: ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityEnhanced, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-vertical-priority-input": { component: ReadoutReadoutStackSizeLargeAlignmentVerticalPriorityInput, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-left-priority-regular": { component: ReadoutReadoutStackSizeLargeAlignmentLeftPriorityRegular, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-left-priority-low-integrity": { component: ReadoutReadoutStackSizeLargeAlignmentLeftPriorityLowIntegrity, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-left-priority-invalid": { component: ReadoutReadoutStackSizeLargeAlignmentLeftPriorityInvalid, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-left-priority-enhanced": { component: ReadoutReadoutStackSizeLargeAlignmentLeftPriorityEnhanced, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-left-priority-input": { component: ReadoutReadoutStackSizeLargeAlignmentLeftPriorityInput, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-center-priority-regular": { component: ReadoutReadoutStackSizeLargeAlignmentCenterPriorityRegular, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-center-priority-low-integrity": { component: ReadoutReadoutStackSizeLargeAlignmentCenterPriorityLowIntegrity, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-center-priority-invalid": { component: ReadoutReadoutStackSizeLargeAlignmentCenterPriorityInvalid, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-large-alignment-center-priority-enhanced": { component: ReadoutReadoutStackSizeLargeAlignmentCenterPriorityEnhanced, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-large-alignment-center-priority-input": { component: ReadoutReadoutStackSizeLargeAlignmentCenterPriorityInput, width: 70.0, height: 80.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-vertical-priority-regular": { component: ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityRegular, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-vertical-priority-low-integrity": { component: ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityLowIntegrity, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-vertical-priority-invalid": { component: ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityInvalid, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-vertical-priority-enhanced": { component: ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityEnhanced, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-vertical-priority-input": { component: ReadoutReadoutStackSizeMediumAlignmentVerticalPriorityInput, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-left-priority-regular": { component: ReadoutReadoutStackSizeMediumAlignmentLeftPriorityRegular, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-left-priority-low-integrity": { component: ReadoutReadoutStackSizeMediumAlignmentLeftPriorityLowIntegrity, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-left-priority-invalid": { component: ReadoutReadoutStackSizeMediumAlignmentLeftPriorityInvalid, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-left-priority-enhanced": { component: ReadoutReadoutStackSizeMediumAlignmentLeftPriorityEnhanced, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-left-priority-input": { component: ReadoutReadoutStackSizeMediumAlignmentLeftPriorityInput, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-center-priority-regular": { component: ReadoutReadoutStackSizeMediumAlignmentCenterPriorityRegular, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-center-priority-low-integrity": { component: ReadoutReadoutStackSizeMediumAlignmentCenterPriorityLowIntegrity, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-center-priority-invalid": { component: ReadoutReadoutStackSizeMediumAlignmentCenterPriorityInvalid, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-medium-alignment-center-priority-enhanced": { component: ReadoutReadoutStackSizeMediumAlignmentCenterPriorityEnhanced, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-medium-alignment-center-priority-input": { component: ReadoutReadoutStackSizeMediumAlignmentCenterPriorityInput, width: 53.0, height: 64.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-vertical-priority-regular": { component: ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityRegular, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-vertical-priority-low-integrity": { component: ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityLowIntegrity, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-vertical-priority-invalid": { component: ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityInvalid, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-vertical-priority-enhanced": { component: ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityEnhanced, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-vertical-priority-input": { component: ReadoutReadoutStackSizeRegularAlignmentVerticalPriorityInput, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-left-priority-regular": { component: ReadoutReadoutStackSizeRegularAlignmentLeftPriorityRegular, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-left-priority-low-integrity": { component: ReadoutReadoutStackSizeRegularAlignmentLeftPriorityLowIntegrity, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-left-priority-invalid": { component: ReadoutReadoutStackSizeRegularAlignmentLeftPriorityInvalid, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-left-priority-enhanced": { component: ReadoutReadoutStackSizeRegularAlignmentLeftPriorityEnhanced, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-left-priority-input": { component: ReadoutReadoutStackSizeRegularAlignmentLeftPriorityInput, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-center-priority-regular": { component: ReadoutReadoutStackSizeRegularAlignmentCenterPriorityRegular, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-center-priority-low-integrity": { component: ReadoutReadoutStackSizeRegularAlignmentCenterPriorityLowIntegrity, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-center-priority-invalid": { component: ReadoutReadoutStackSizeRegularAlignmentCenterPriorityInvalid, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-stack/size-regular-alignment-center-priority-enhanced": { component: ReadoutReadoutStackSizeRegularAlignmentCenterPriorityEnhanced, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-stack/size-regular-alignment-center-priority-input": { component: ReadoutReadoutStackSizeRegularAlignmentCenterPriorityInput, width: 47.0, height: 60.0, kind: "leaf", group: "readout", shapeCount: 6 },
  "readout/readout-list-item": { component: ReadoutReadoutListItem, width: 499.0, height: 1182.0, kind: "composite", group: "readout", shapeCount: 311 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-regular": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityRegular, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityLowIntegrity, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-invalid": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInvalid, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityEnhanced, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-input": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInput, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-trailing-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionTrailingPriorityInputFlipFlop, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-regular": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityRegular, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityLowIntegrity, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-invalid": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInvalid, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityEnhanced, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-input": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInput, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-trailing-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionTrailingPriorityInputFlipFlop, width: 160.0, height: 24.0, kind: "leaf", group: "readout", shapeCount: 7 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-regular": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityRegular, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityLowIntegrity, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-invalid": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInvalid, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityEnhanced, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-input": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInput, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-trailing-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionTrailingPriorityInputFlipFlop, width: 160.0, height: 36.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-regular": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityRegular, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityLowIntegrity, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-invalid": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInvalid, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityEnhanced, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-input": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInput, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-base-unit-position-leading-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizeBaseUnitPositionLeadingPriorityInputFlipFlop, width: 160.0, height: 20.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-regular": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityRegular, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityLowIntegrity, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-invalid": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInvalid, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityEnhanced, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-input": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInput, width: 160.0, height: 32.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-priority-unit-position-leading-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizePriorityUnitPositionLeadingPriorityInputFlipFlop, width: 160.0, height: 24.0, kind: "leaf", group: "readout", shapeCount: 7 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-regular": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityRegular, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-low-integrity": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityLowIntegrity, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-invalid": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInvalid, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 10 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-enhanced": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityEnhanced, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-input": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInput, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
  "readout/readout-list-item/readout-size-enhanced-unit-position-leading-priority-input-flip-flop": { component: ReadoutReadoutListItemReadoutSizeEnhancedUnitPositionLeadingPriorityInputFlipFlop, width: 160.0, height: 48.0, kind: "leaf", group: "readout", shapeCount: 8 },
} as const;

export type OpenBridgeAssetKey = keyof typeof openBridgeAssetRegistry;

export function OpenBridgeAsset({ asset, ...props }: { asset: OpenBridgeAssetKey } & OpenBridgeAssetProps) {
  const entry = openBridgeAssetRegistry[asset];
  const Component: any = entry.component;
  return <Component {...props} />;
}
