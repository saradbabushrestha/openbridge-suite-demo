import * as React from 'react';
import type { OpenBridgeAssetProps } from './runtime/renderOpenBridgeSvg';
import { NotificationAndAdviceNotificationNotificationButton } from "./components/notification-and-advice/notification/notification-button";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateEnabledIsActiveFalse } from "./components/notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-false";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateEnabledIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeNormalStateEnabledIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-normal-state-enabled-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateEnabledIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-enhanced-state-enabled-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveFalse } from "./components/notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-false";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeNormalStateHoverIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-normal-state-hover-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateHoverIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-enhanced-state-hover-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateActiveIsActiveFalse } from "./components/notification-and-advice/notification/notification-button/type-flat-state-active-is-active-false";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateActiveIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-flat-state-active-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeNormalStateActiveIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-normal-state-active-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateActiveIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-enhanced-state-active-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateFocusedIsActiveFalse } from "./components/notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-false";
import { NotificationAndAdviceNotificationNotificationButtonTypeFlatStateFocusedIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeNormalStateFocusedIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-normal-state-focused-is-active-true";
import { NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateFocusedIsActiveTrue } from "./components/notification-and-advice/notification/notification-button/type-enhanced-state-focused-is-active-true";
import { NotificationAndAdviceNotificationNotificationMenu } from "./components/notification-and-advice/notification/notification-menu";
import { NotificationAndAdviceNotificationNotificationFloatingItem } from "./components/notification-and-advice/notification/notification-floating-item";
import { NotificationAndAdviceAdviceAdviceButton } from "./components/notification-and-advice/advice/advice-button";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalse } from "./components/notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-false";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeNormalStateEnabledIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-normal-state-enabled-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateEnabledIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-enhanced-state-enabled-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateHoverIsActiveFalse } from "./components/notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-false";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateHoverIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeNormalStateHoverIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-normal-state-hover-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateHoverIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-enhanced-state-hover-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateActiveIsActiveFalse } from "./components/notification-and-advice/advice/advice-button/type-flat-state-active-is-active-false";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateActiveIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-flat-state-active-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeNormalStateActiveIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-normal-state-active-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateActiveIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-enhanced-state-active-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateFocusedIsActiveFalse } from "./components/notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-false";
import { NotificationAndAdviceAdviceAdviceButtonTypeFlatStateFocusedIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeNormalStateFocusedIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-normal-state-focused-is-active-true";
import { NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateFocusedIsActiveTrue } from "./components/notification-and-advice/advice/advice-button/type-enhanced-state-focused-is-active-true";
import { NotificationAndAdviceAdviceAdviceMenu } from "./components/notification-and-advice/advice/advice-menu";
import { NotificationAndAdviceAdviceAdviceFloatingItem } from "./components/notification-and-advice/advice/advice-floating-item";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItem } from "./components/notification-and-advice/building-block-notification/notification-message-item";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithButtonSizeRegularSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-with-button-size-regular-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithIconButtonSizeRegularSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-with-icon-button-size-regular-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeSimpleSizeRegularSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-simple-size-regular-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeInactiveSizeRegularSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-inactive-size-regular-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithButtonSizeTallSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-with-button-size-tall-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithIconButtonSizeTallSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-with-icon-button-size-tall-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeSimpleSizeTallSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-simple-size-tall-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeInactiveSizeTallSize } from "./components/notification-and-advice/building-block-notification/notification-message-item/type-inactive-size-tall-size";
import { NotificationAndAdviceBuildingBlockNotificationNotificationMenuItem } from "./components/notification-and-advice/building-block-notification/notification-menu-item";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItem } from "./components/notification-and-advice/building-block-advice/advice-message-item";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithButtonSizeRegularSize } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-with-button-size-regular-size";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithIconButtonSizeRegularSize } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-with-icon-button-size-regular-size";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeSimpleSizeRegularSize } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-simple-size-regular-size";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeInactiveSizeRegularSize } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-inactive-size-regular-size";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithButtonSizeTall } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-with-button-size-tall";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithIconButtonSizeTall } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-with-icon-button-size-tall";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeSimpleSizeTall } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-simple-size-tall";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeInactiveSizeTall } from "./components/notification-and-advice/building-block-advice/advice-message-item/type-inactive-size-tall";
import { NotificationAndAdviceBuildingBlockAdviceAdviceMenuItem } from "./components/notification-and-advice/building-block-advice/advice-menu-item";
import { MainNavigationElementsTopbarTypeRegular } from "./components/main-navigation-elements/topbar/type-regular";
import { MainNavigationElementsTopbarTypeTall } from "./components/main-navigation-elements/topbar/type-tall";
import { MainNavigationElementsTopbarTypeWideRail } from "./components/main-navigation-elements/topbar/type-wide-rail";
import { MainNavigationElementsTopbarTypeInactive } from "./components/main-navigation-elements/topbar/type-inactive";
import { MainNavigationElementsTopbarTypeOverlay } from "./components/main-navigation-elements/topbar/type-overlay";
import { MainNavigationElementsTopbarTypeSplit } from "./components/main-navigation-elements/topbar/type-split";
import { MainNavigationElementsTopbarTypeSubPage } from "./components/main-navigation-elements/topbar/type-sub-page";
import { MainNavigationElementsTopbarTypeDouble } from "./components/main-navigation-elements/topbar/type-double";
import { MainNavigationElementsTopbarTypeSmall } from "./components/main-navigation-elements/topbar/type-small";
import { MainNavigationElementsTopbarTypeSmallInactive } from "./components/main-navigation-elements/topbar/type-small-inactive";
import { MainNavigationElementsTopbarTypeSmallSubPage } from "./components/main-navigation-elements/topbar/type-small-sub-page";
import { MainNavigationElementsTopbarTypeSmallDouble } from "./components/main-navigation-elements/topbar/type-small-double";
import { MainNavigationElementsTopbarTypeFloatingWindow } from "./components/main-navigation-elements/topbar/type-floating-window";
import { MainNavigationElementsToolbar } from "./components/main-navigation-elements/toolbar";
import { MainNavigationElementsNavigationMenuTypeFullHeightNavigationRegular } from "./components/main-navigation-elements/navigation-menu/type-full-height-navigation-regular";
import { MainNavigationElementsNavigationMenuTypeFullHeightNavigationTreeNavigation } from "./components/main-navigation-elements/navigation-menu/type-full-height-navigation-tree-navigation";
import { MainNavigationElementsNavigationMenuTypeCondencedNavigationTreeNavigation } from "./components/main-navigation-elements/navigation-menu/type-condenced-navigation-tree-navigation";
import { MainNavigationElementsNavigationMenuTypeFullHeightNavigationFlyout } from "./components/main-navigation-elements/navigation-menu/type-full-height-navigation-flyout";
import { MainNavigationElementsNavigationMenuTypeFullHeightNavigationFlyoutExpanded } from "./components/main-navigation-elements/navigation-menu/type-full-height-navigation-flyout-expanded";
import { MainNavigationElementsNavigationMenuTypeRailNavigationRegular } from "./components/main-navigation-elements/navigation-menu/type-rail-navigation-regular";
import { MainNavigationElementsNavigationMenuTypeRailNavigationFlyout } from "./components/main-navigation-elements/navigation-menu/type-rail-navigation-flyout";
import { MainNavigationElementsNavigationMenuTypeRailNavigationFlyoutExpanded } from "./components/main-navigation-elements/navigation-menu/type-rail-navigation-flyout-expanded";
import { MainNavigationElementsNavigationMenuContextMenu } from "./components/main-navigation-elements/navigation-menu/context-menu";
import { MainNavigationElementsNavigationMenuTypeRailLabeledNavigationRegular } from "./components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-regular";
import { MainNavigationElementsNavigationMenuTypeRailLabeledNavigationFlyoutExpanded } from "./components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout-expanded";
import { MainNavigationElementsNavigationMenuContextMenuInstance02 } from "./components/main-navigation-elements/navigation-menu/context-menu__instance-02";
import { MainNavigationElementsNavigationMenuTypeRailLabeledNavigationFlyout } from "./components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout";
import { MainNavigationElementsNavigationMenuTypeCondencedNavigationRegular } from "./components/main-navigation-elements/navigation-menu/type-condenced-navigation-regular";
import { MainNavigationElementsNavigationMenuTypeCondencedNavigationFlyout } from "./components/main-navigation-elements/navigation-menu/type-condenced-navigation-flyout";
import { MainNavigationElementsNavigationMenuTypeCondencedNavigationFlyoutExpanded } from "./components/main-navigation-elements/navigation-menu/type-condenced-navigation-flyout-expanded";
import { MainNavigationElementsNavigationMenuNavigationMenuSubPage } from "./components/main-navigation-elements/navigation-menu/navigation-menu-sub-page";
import { MainNavigationElementsNavigationMenuNavigationMenuSubPageContentSettingsSpatiousFalse } from "./components/main-navigation-elements/navigation-menu/navigation-menu-sub-page/content-settings-spatious-false";
import { MainNavigationElementsNavigationMenuNavigationMenuSubPageContentSettingsSpatiousTrue } from "./components/main-navigation-elements/navigation-menu/navigation-menu-sub-page/content-settings-spatious-true";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooter } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeRegular } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-regular";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIcon } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadge } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance02 } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-02";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance03 } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-03";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance04 } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-04";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconLarge } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon-large";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconLabel } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon-label";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIconLabel } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon-label";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIconLarge } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon-large";
import { MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIcon } from "./components/main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButton } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateEnabled } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button/state-enabled";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateHover } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button/state-hover";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateActive } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button/state-active";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateDisabled } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button/state-disabled";
import { MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateFocused } from "./components/main-navigation-elements/building-block-navigation-menu/vendor-button/state-focused";
import { TopBarCommandMenuCommandMenuBeta } from "./components/top-bar/command-menu/command-menu-beta";
import { TopBarCommandMenuCommandMenuBetaTypeDefault } from "./components/top-bar/command-menu/command-menu-beta/type-default";
import { TopBarCommandMenuCommandMenuBetaTypeCommandOtherPlace } from "./components/top-bar/command-menu/command-menu-beta/type-command-other-place";
import { TopBarCommandMenuCommandMenuBetaTypePropulsionCommand } from "./components/top-bar/command-menu/command-menu-beta/type-propulsion-command";
import { TopBarCommandMenuCommandMenuBetaTypeAutomationCommand } from "./components/top-bar/command-menu/command-menu-beta/type-automation-command";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBeta } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconButtonInCommandFalse } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-button-in-command-false";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconFullInCommandFalse } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-full-in-command-false";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeExpandedInCommandFalse } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta/type-expanded-in-command-false";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconFullInCommandTrue } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-full-in-command-true";
import { TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeExpandedInCommandTrue } from "./components/top-bar/command-menu/command-menu-beta/command-button-beta/type-expanded-in-command-true";
import { TopBarUserUserMenuTypeSignInSizeRegular } from "./components/top-bar/user/user-menu/type-sign-in-size-regular";
import { TopBarUserUserMenuTypeUserSignInSizeRegular } from "./components/top-bar/user/user-menu/type-user-sign-in-size-regular";
import { TopBarUserUserMenuTypeUserSignInSizeSmall } from "./components/top-bar/user/user-menu/type-user-sign-in-size-small";
import { TopBarUserUserMenuTypeLoadingSignInSizeSmall } from "./components/top-bar/user/user-menu/type-loading-sign-in-size-small";
import { TopBarUserUserMenuTypeSignedInSizeSmall } from "./components/top-bar/user/user-menu/type-signed-in-size-small";
import { TopBarUserUserMenuTypeLoadingSignInSizeRegular } from "./components/top-bar/user/user-menu/type-loading-sign-in-size-regular";
import { TopBarUserUserMenuTypeSignedInSizeRegular } from "./components/top-bar/user/user-menu/type-signed-in-size-regular";
import { TopBarUserUserMenuTypeSignInSizeSmall } from "./components/top-bar/user/user-menu/type-sign-in-size-small";
import { TopBarAppAppButton } from "./components/top-bar/app/app-button";
import { TopBarAppAppButtonTypeRegular } from "./components/top-bar/app/app-button/type-regular";
import { TopBarAppAppButtonTypePinnedApps } from "./components/top-bar/app/app-button/type-pinned-apps";
import { TopBarAppAppMenu } from "./components/top-bar/app/app-menu";
import { TopBarAppAppMenuExpandFalseSizeSmall } from "./components/top-bar/app/app-menu/expand-false-size-small";
import { TopBarAppAppMenuExpandFalseSizeLarge } from "./components/top-bar/app/app-menu/expand-false-size-large";
import { TopBarAppAppMenuExpandTrueSizeSmall } from "./components/top-bar/app/app-menu/expand-true-size-small";
import { TopBarAppAppMenuExpandTrueSizeLarge } from "./components/top-bar/app/app-menu/expand-true-size-large";
import { TopBarSystemSystemButton } from "./components/top-bar/system/system-button";
import { TopBarSystemSystemButtonTypeCondensedStateEnabled } from "./components/top-bar/system/system-button/type-condensed-state-enabled";
import { TopBarSystemSystemButtonTypeCondensedStateHover } from "./components/top-bar/system/system-button/type-condensed-state-hover";
import { TopBarSystemSystemButtonTypeCondensedStateActive } from "./components/top-bar/system/system-button/type-condensed-state-active";
import { TopBarSystemSystemButtonTypeCondensedStateFocused } from "./components/top-bar/system/system-button/type-condensed-state-focused";
import { TopBarSystemSystemButtonTypeCondensedStateDisabled } from "./components/top-bar/system/system-button/type-condensed-state-disabled";
import { TopBarSystemSystemButtonTypeExpandedStateEnabled } from "./components/top-bar/system/system-button/type-expanded-state-enabled";
import { TopBarSystemSystemButtonTypeExpandedStateHover } from "./components/top-bar/system/system-button/type-expanded-state-hover";
import { TopBarSystemSystemButtonTypeExpandedStateActive } from "./components/top-bar/system/system-button/type-expanded-state-active";
import { TopBarSystemSystemButtonTypeExpandedStateFocused } from "./components/top-bar/system/system-button/type-expanded-state-focused";
import { TopBarSystemSystemButtonTypeExpandedStateDisabled } from "./components/top-bar/system/system-button/type-expanded-state-disabled";
import { TopBarSystemSystemButtonTypeActionsStateEnabled } from "./components/top-bar/system/system-button/type-actions-state-enabled";
import { TopBarSystemSystemMenuTypeMenuRegular } from "./components/top-bar/system/system-menu/type-menu-regular";
import { TopBarSystemSystemMenuTypeMenuCondensed } from "./components/top-bar/system/system-menu/type-menu-condensed";
import { TopBarSystemSystemMenuTypeWiFiOn } from "./components/top-bar/system/system-menu/type-wi-fi-on";
import { TopBarSystemSystemMenuTypeWiFiOff } from "./components/top-bar/system/system-menu/type-wi-fi-off";
import { TopBarSystemSystemMenuTypeAudioOn } from "./components/top-bar/system/system-menu/type-audio-on";
import { TopBarSystemSystemMenuTypeAudioOff } from "./components/top-bar/system/system-menu/type-audio-off";
import { TopBarSystemSystemMenuTypeMicrophoneOn } from "./components/top-bar/system/system-menu/type-microphone-on";
import { TopBarSystemSystemMenuTypeMicrophoneOff } from "./components/top-bar/system/system-menu/type-microphone-off";
import { TopBarSystemSystemMenuTypeBattery } from "./components/top-bar/system/system-menu/type-battery";
import { TopBarSystemSystemMenuTypeWiFiSmallScreen } from "./components/top-bar/system/system-menu/type-wi-fi-small-screen";
import { TopBarSystemSystemMenuTypeAudioSmallScreen } from "./components/top-bar/system/system-menu/type-audio-small-screen";
import { TopBarSystemSystemMenuTypeMicrophoneSmallScreen } from "./components/top-bar/system/system-menu/type-microphone-small-screen";
import { TopBarSystemSystemMenuTypeBatterySmallScreen } from "./components/top-bar/system/system-menu/type-battery-small-screen";
import { TopBarBrillianceMenuOptionsPaletteDay } from "./components/top-bar/brilliance-menu/options-palette-day";
import { TopBarBrillianceMenuOptionsPaletteDusk } from "./components/top-bar/brilliance-menu/options-palette-dusk";
import { TopBarBrillianceMenuOptionsPaletteNight } from "./components/top-bar/brilliance-menu/options-palette-night";
import { TopBarBrillianceMenuOptionsPaletteBright } from "./components/top-bar/brilliance-menu/options-palette-bright";
import { TopBarBrillianceMenuOptionsBrillianceLm } from "./components/top-bar/brilliance-menu/options-brilliance-lm";
import { TopBarBrillianceMenuOptionsBrilliance } from "./components/top-bar/brilliance-menu/options-brilliance";
import { TopBarBrillianceMenuOptionsBrillianceAndPalette } from "./components/top-bar/brilliance-menu/options-brilliance-and-palette";
import { TopBarBrillianceMenuOptionsCondenced } from "./components/top-bar/brilliance-menu/options-condenced";
import { TopBarBrillianceMenuOptionsBrillianceAndPaletteSmallScreen } from "./components/top-bar/brilliance-menu/options-brilliance-and-palette-small-screen";
import { TopBarBrillianceMenuBrillianceButton } from "./components/top-bar/brilliance-menu/brilliance-button";
import { TopBarBrillianceMenuBrillianceButtonTypeRegular } from "./components/top-bar/brilliance-menu/brilliance-button/type-regular";
import { TopBarBrillianceMenuBrillianceButtonTypeActions } from "./components/top-bar/brilliance-menu/brilliance-button/type-actions";
import { TopBarCalendarTypeLarge } from "./components/top-bar/calendar/type-large";
import { TopBarCalendarTypeRegular } from "./components/top-bar/calendar/type-regular";
import { TopBarCalendarTypeSmall } from "./components/top-bar/calendar/type-small";
import { TopBarCalendarTypeXlarge } from "./components/top-bar/calendar/type-xlarge";
import { TopBarButton } from "./components/top-bar/button";
import { TopBarBuildingBlockCalendarDateItem } from "./components/top-bar/building-block-calendar/date-item";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-checked-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-small-type-checked-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-small-type-checked-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-disabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-checked-state-disabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-disabled";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-small-type-checked-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateEnabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-checked-state-enabled";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateHover } from "./components/top-bar/building-block-calendar/date-item/size-large-type-checked-state-hover";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateActive } from "./components/top-bar/building-block-calendar/date-item/size-large-type-checked-state-active";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateFocused } from "./components/top-bar/building-block-calendar/date-item/size-large-type-checked-state-focused";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-disabled";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-disabled";
import { TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateDisabled } from "./components/top-bar/building-block-calendar/date-item/size-large-type-checked-state-disabled";
import { TopBarBuildingBlockCalendarEventList } from "./components/top-bar/building-block-calendar/event-list";
import { TopBarBuildingBlockCalendarEventItem } from "./components/top-bar/building-block-calendar/event-item";
import { TopBarBuildingBlockCalendarEventItemStateColorCodedTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-color-coded-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStateColorCodedTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-color-coded-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStateColorCodedTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-color-coded-type-aggregated";
import { TopBarBuildingBlockCalendarEventItemStateEnabledTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-enabled-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStateEnabledTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-enabled-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStateEnabledTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-enabled-type-aggregated";
import { TopBarBuildingBlockCalendarEventItemStateHoverTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-hover-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStateHoverTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-hover-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStateHoverTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-hover-type-aggregated";
import { TopBarBuildingBlockCalendarEventItemStatePressedTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-pressed-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStatePressedTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-pressed-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStatePressedTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-pressed-type-aggregated";
import { TopBarBuildingBlockCalendarEventItemStateFocusedTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-focused-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStateFocusedTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-focused-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStateFocusedTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-focused-type-aggregated";
import { TopBarBuildingBlockCalendarEventItemStateDisabledTypeSingleLine } from "./components/top-bar/building-block-calendar/event-item/state-disabled-type-single-line";
import { TopBarBuildingBlockCalendarEventItemStateDisabledTypeDoubleLine } from "./components/top-bar/building-block-calendar/event-item/state-disabled-type-double-line";
import { TopBarBuildingBlockCalendarEventItemStateDisabledTypeAggregated } from "./components/top-bar/building-block-calendar/event-item/state-disabled-type-aggregated";

export const openBridgeAssetRegistry = {
  "notification-and-advice/notification/notification-button": { component: NotificationAndAdviceNotificationNotificationButton, width: 384.0, height: 296.0, kind: "composite", group: "notification-and-advice", shapeCount: 53 },
  "notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-false": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateEnabledIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 1 },
  "notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 1 },
  "notification-and-advice/notification/notification-button/type-normal-state-enabled-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeNormalStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-enhanced-state-enabled-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-false": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/notification/notification-button/type-normal-state-hover-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeNormalStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-enhanced-state-hover-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-flat-state-active-is-active-false": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateActiveIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/notification/notification-button/type-flat-state-active-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/notification/notification-button/type-normal-state-active-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeNormalStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-enhanced-state-active-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-false": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateFocusedIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/notification/notification-button/type-normal-state-focused-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeNormalStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/notification/notification-button/type-enhanced-state-focused-is-active-true": { component: NotificationAndAdviceNotificationNotificationButtonTypeEnhancedStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/notification/notification-menu": { component: NotificationAndAdviceNotificationNotificationMenu, width: 704.0, height: 964.0, kind: "leaf", group: "notification-and-advice", shapeCount: 100 },
  "notification-and-advice/notification/notification-floating-item": { component: NotificationAndAdviceNotificationNotificationFloatingItem, width: 704.0, height: 520.0, kind: "leaf", group: "notification-and-advice", shapeCount: 69 },
  "notification-and-advice/advice/advice-button": { component: NotificationAndAdviceAdviceAdviceButton, width: 384.0, height: 296.0, kind: "composite", group: "notification-and-advice", shapeCount: 57 },
  "notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-false": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 1 },
  "notification-and-advice/advice/advice-button/type-normal-state-enabled-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeNormalStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-enhanced-state-enabled-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateEnabledIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-false": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateHoverIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/advice/advice-button/type-normal-state-hover-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeNormalStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-enhanced-state-hover-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateHoverIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-flat-state-active-is-active-false": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateActiveIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/advice/advice-button/type-flat-state-active-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 2 },
  "notification-and-advice/advice/advice-button/type-normal-state-active-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeNormalStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-enhanced-state-active-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateActiveIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-false": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateFocusedIsActiveFalse, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 4 },
  "notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/advice/advice-button/type-normal-state-focused-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeNormalStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/advice/advice-button/type-enhanced-state-focused-is-active-true": { component: NotificationAndAdviceAdviceAdviceButtonTypeEnhancedStateFocusedIsActiveTrue, width: 48.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/advice/advice-menu": { component: NotificationAndAdviceAdviceAdviceMenu, width: 704.0, height: 964.0, kind: "leaf", group: "notification-and-advice", shapeCount: 103 },
  "notification-and-advice/advice/advice-floating-item": { component: NotificationAndAdviceAdviceAdviceFloatingItem, width: 704.0, height: 520.0, kind: "leaf", group: "notification-and-advice", shapeCount: 71 },
  "notification-and-advice/building-block-notification/notification-message-item": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItem, width: 680.0, height: 656.0, kind: "composite", group: "notification-and-advice", shapeCount: 55 },
  "notification-and-advice/building-block-notification/notification-message-item/type-with-button-size-regular-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithButtonSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 9 },
  "notification-and-advice/building-block-notification/notification-message-item/type-with-icon-button-size-regular-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithIconButtonSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 9 },
  "notification-and-advice/building-block-notification/notification-message-item/type-simple-size-regular-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeSimpleSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/building-block-notification/notification-message-item/type-inactive-size-regular-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeInactiveSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/building-block-notification/notification-message-item/type-with-button-size-tall-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithButtonSizeTallSize, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 9 },
  "notification-and-advice/building-block-notification/notification-message-item/type-with-icon-button-size-tall-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeWithIconButtonSizeTallSize, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 9 },
  "notification-and-advice/building-block-notification/notification-message-item/type-simple-size-tall-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeSimpleSizeTallSize, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 6 },
  "notification-and-advice/building-block-notification/notification-message-item/type-inactive-size-tall-size": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMessageItemTypeInactiveSizeTallSize, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/building-block-notification/notification-menu-item": { component: NotificationAndAdviceBuildingBlockNotificationNotificationMenuItem, width: 624.0, height: 472.0, kind: "leaf", group: "notification-and-advice", shapeCount: 40 },
  "notification-and-advice/building-block-advice/advice-message-item": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItem, width: 680.0, height: 656.0, kind: "composite", group: "notification-and-advice", shapeCount: 67 },
  "notification-and-advice/building-block-advice/advice-message-item/type-with-button-size-regular-size": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithButtonSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 11 },
  "notification-and-advice/building-block-advice/advice-message-item/type-with-icon-button-size-regular-size": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithIconButtonSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 11 },
  "notification-and-advice/building-block-advice/advice-message-item/type-simple-size-regular-size": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeSimpleSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 8 },
  "notification-and-advice/building-block-advice/advice-message-item/type-inactive-size-regular-size": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeInactiveSizeRegularSize, width: 640.0, height: 48.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/building-block-advice/advice-message-item/type-with-button-size-tall": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithButtonSizeTall, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 11 },
  "notification-and-advice/building-block-advice/advice-message-item/type-with-icon-button-size-tall": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeWithIconButtonSizeTall, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 11 },
  "notification-and-advice/building-block-advice/advice-message-item/type-simple-size-tall": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeSimpleSizeTall, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 8 },
  "notification-and-advice/building-block-advice/advice-message-item/type-inactive-size-tall": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMessageItemTypeInactiveSizeTall, width: 640.0, height: 64.0, kind: "leaf", group: "notification-and-advice", shapeCount: 3 },
  "notification-and-advice/building-block-advice/advice-menu-item": { component: NotificationAndAdviceBuildingBlockAdviceAdviceMenuItem, width: 624.0, height: 472.0, kind: "leaf", group: "notification-and-advice", shapeCount: 40 },
  "main-navigation-elements/topbar/type-regular": { component: MainNavigationElementsTopbarTypeRegular, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 33 },
  "main-navigation-elements/topbar/type-tall": { component: MainNavigationElementsTopbarTypeTall, width: 1920.0, height: 64.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 33 },
  "main-navigation-elements/topbar/type-wide-rail": { component: MainNavigationElementsTopbarTypeWideRail, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 33 },
  "main-navigation-elements/topbar/type-inactive": { component: MainNavigationElementsTopbarTypeInactive, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 14 },
  "main-navigation-elements/topbar/type-overlay": { component: MainNavigationElementsTopbarTypeOverlay, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 15 },
  "main-navigation-elements/topbar/type-split": { component: MainNavigationElementsTopbarTypeSplit, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 28 },
  "main-navigation-elements/topbar/type-sub-page": { component: MainNavigationElementsTopbarTypeSubPage, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 31 },
  "main-navigation-elements/topbar/type-double": { component: MainNavigationElementsTopbarTypeDouble, width: 1920.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 40 },
  "main-navigation-elements/topbar/type-small": { component: MainNavigationElementsTopbarTypeSmall, width: 640.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 27 },
  "main-navigation-elements/topbar/type-small-inactive": { component: MainNavigationElementsTopbarTypeSmallInactive, width: 640.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 12 },
  "main-navigation-elements/topbar/type-small-sub-page": { component: MainNavigationElementsTopbarTypeSmallSubPage, width: 640.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 17 },
  "main-navigation-elements/topbar/type-small-double": { component: MainNavigationElementsTopbarTypeSmallDouble, width: 640.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 26 },
  "main-navigation-elements/topbar/type-floating-window": { component: MainNavigationElementsTopbarTypeFloatingWindow, width: 1920.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 15 },
  "main-navigation-elements/toolbar": { component: MainNavigationElementsToolbar, width: 1984.0, height: 496.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 140 },
  "main-navigation-elements/navigation-menu/type-full-height-navigation-regular": { component: MainNavigationElementsNavigationMenuTypeFullHeightNavigationRegular, width: 320.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 53 },
  "main-navigation-elements/navigation-menu/type-full-height-navigation-tree-navigation": { component: MainNavigationElementsNavigationMenuTypeFullHeightNavigationTreeNavigation, width: 320.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 57 },
  "main-navigation-elements/navigation-menu/type-condenced-navigation-tree-navigation": { component: MainNavigationElementsNavigationMenuTypeCondencedNavigationTreeNavigation, width: 320.0, height: 312.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 39 },
  "main-navigation-elements/navigation-menu/type-full-height-navigation-flyout": { component: MainNavigationElementsNavigationMenuTypeFullHeightNavigationFlyout, width: 320.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 55 },
  "main-navigation-elements/navigation-menu/type-full-height-navigation-flyout-expanded": { component: MainNavigationElementsNavigationMenuTypeFullHeightNavigationFlyoutExpanded, width: 320.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 52 },
  "main-navigation-elements/navigation-menu/type-rail-navigation-regular": { component: MainNavigationElementsNavigationMenuTypeRailNavigationRegular, width: 56.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 27 },
  "main-navigation-elements/navigation-menu/type-rail-navigation-flyout": { component: MainNavigationElementsNavigationMenuTypeRailNavigationFlyout, width: 56.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 29 },
  "main-navigation-elements/navigation-menu/type-rail-navigation-flyout-expanded": { component: MainNavigationElementsNavigationMenuTypeRailNavigationFlyoutExpanded, width: 56.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 29 },
  "main-navigation-elements/navigation-menu/context-menu": { component: MainNavigationElementsNavigationMenuContextMenu, width: 233.33, height: 248.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 17 },
  "main-navigation-elements/navigation-menu/type-rail-labeled-navigation-regular": { component: MainNavigationElementsNavigationMenuTypeRailLabeledNavigationRegular, width: 64.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 37 },
  "main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout-expanded": { component: MainNavigationElementsNavigationMenuTypeRailLabeledNavigationFlyoutExpanded, width: 64.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 39 },
  "main-navigation-elements/navigation-menu/context-menu__instance-02": { component: MainNavigationElementsNavigationMenuContextMenuInstance02, width: 200.0, height: 248.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 12 },
  "main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout": { component: MainNavigationElementsNavigationMenuTypeRailLabeledNavigationFlyout, width: 64.0, height: 800.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 39 },
  "main-navigation-elements/navigation-menu/type-condenced-navigation-regular": { component: MainNavigationElementsNavigationMenuTypeCondencedNavigationRegular, width: 320.0, height: 312.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 37 },
  "main-navigation-elements/navigation-menu/type-condenced-navigation-flyout": { component: MainNavigationElementsNavigationMenuTypeCondencedNavigationFlyout, width: 320.0, height: 312.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 37 },
  "main-navigation-elements/navigation-menu/type-condenced-navigation-flyout-expanded": { component: MainNavigationElementsNavigationMenuTypeCondencedNavigationFlyoutExpanded, width: 320.0, height: 312.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 38 },
  "main-navigation-elements/navigation-menu/navigation-menu-sub-page": { component: MainNavigationElementsNavigationMenuNavigationMenuSubPage, width: 788.0, height: 892.0, kind: "composite", group: "main-navigation-elements", shapeCount: 73 },
  "main-navigation-elements/navigation-menu/navigation-menu-sub-page/content-settings-spatious-false": { component: MainNavigationElementsNavigationMenuNavigationMenuSubPageContentSettingsSpatiousFalse, width: 320.0, height: 847.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 36 },
  "main-navigation-elements/navigation-menu/navigation-menu-sub-page/content-settings-spatious-true": { component: MainNavigationElementsNavigationMenuNavigationMenuSubPageContentSettingsSpatiousTrue, width: 320.0, height: 847.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 36 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooter, width: 429.0, height: 839.0, kind: "composite", group: "main-navigation-elements", shapeCount: 127 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-regular": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeRegular, width: 320.0, height: 248.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 34 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIcon, width: 48.0, height: 192.0, kind: "composite", group: "main-navigation-elements", shapeCount: 14 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadge, width: 16.0, height: 16.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 1 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-02": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance02, width: 16.0, height: 16.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 1 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-03": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance03, width: 16.0, height: 16.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 1 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon/alert-badge__instance-04": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconAlertBadgeInstance04, width: 16.0, height: 16.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 1 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon-large": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconLarge, width: 56.0, height: 200.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 14 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-vertical-icon-label": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeVerticalIconLabel, width: 64.0, height: 256.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 18 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon-label": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIconLabel, width: 320.0, height: 64.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 18 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon-large": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIconLarge, width: 320.0, height: 56.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 14 },
  "main-navigation-elements/building-block-navigation-menu/navigation-menu-footer/type-horizontal-icon": { component: MainNavigationElementsBuildingBlockNavigationMenuNavigationMenuFooterTypeHorizontalIcon, width: 320.0, height: 48.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 14 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButton, width: 352.0, height: 571.0, kind: "composite", group: "main-navigation-elements", shapeCount: 94 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button/state-enabled": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateEnabled, width: 320.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 18 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button/state-hover": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateHover, width: 320.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 19 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button/state-active": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateActive, width: 320.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 19 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button/state-disabled": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateDisabled, width: 320.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 18 },
  "main-navigation-elements/building-block-navigation-menu/vendor-button/state-focused": { component: MainNavigationElementsBuildingBlockNavigationMenuVendorButtonStateFocused, width: 320.0, height: 96.0, kind: "leaf", group: "main-navigation-elements", shapeCount: 19 },
  "top-bar/command-menu/command-menu-beta": { component: TopBarCommandMenuCommandMenuBeta, width: 1960.0, height: 622.0, kind: "composite", group: "top-bar", shapeCount: 141 },
  "top-bar/command-menu/command-menu-beta/type-default": { component: TopBarCommandMenuCommandMenuBetaTypeDefault, width: 360.0, height: 249.0, kind: "leaf", group: "top-bar", shapeCount: 17 },
  "top-bar/command-menu/command-menu-beta/type-command-other-place": { component: TopBarCommandMenuCommandMenuBetaTypeCommandOtherPlace, width: 360.0, height: 249.0, kind: "leaf", group: "top-bar", shapeCount: 20 },
  "top-bar/command-menu/command-menu-beta/type-propulsion-command": { component: TopBarCommandMenuCommandMenuBetaTypePropulsionCommand, width: 720.0, height: 570.0, kind: "leaf", group: "top-bar", shapeCount: 39 },
  "top-bar/command-menu/command-menu-beta/type-automation-command": { component: TopBarCommandMenuCommandMenuBetaTypeAutomationCommand, width: 720.0, height: 450.0, kind: "leaf", group: "top-bar", shapeCount: 64 },
  "top-bar/command-menu/command-menu-beta/command-button-beta": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBeta, width: 562.0, height: 472.0, kind: "composite", group: "top-bar", shapeCount: 60 },
  "top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-button-in-command-false": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconButtonInCommandFalse, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 2 },
  "top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-full-in-command-false": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconFullInCommandFalse, width: 310.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/command-menu/command-menu-beta/command-button-beta/type-expanded-in-command-false": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeExpandedInCommandFalse, width: 421.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 1 },
  "top-bar/command-menu/command-menu-beta/command-button-beta/type-icon-full-in-command-true": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeIconFullInCommandTrue, width: 310.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/command-menu/command-menu-beta/command-button-beta/type-expanded-in-command-true": { component: TopBarCommandMenuCommandMenuBetaCommandButtonBetaTypeExpandedInCommandTrue, width: 513.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/user/user-menu/type-sign-in-size-regular": { component: TopBarUserUserMenuTypeSignInSizeRegular, width: 320.0, height: 352.0, kind: "leaf", group: "top-bar", shapeCount: 27 },
  "top-bar/user/user-menu/type-user-sign-in-size-regular": { component: TopBarUserUserMenuTypeUserSignInSizeRegular, width: 320.0, height: 408.0, kind: "leaf", group: "top-bar", shapeCount: 28 },
  "top-bar/user/user-menu/type-user-sign-in-size-small": { component: TopBarUserUserMenuTypeUserSignInSizeSmall, width: 320.0, height: 316.0, kind: "leaf", group: "top-bar", shapeCount: 29 },
  "top-bar/user/user-menu/type-loading-sign-in-size-small": { component: TopBarUserUserMenuTypeLoadingSignInSizeSmall, width: 320.0, height: 148.0, kind: "leaf", group: "top-bar", shapeCount: 10 },
  "top-bar/user/user-menu/type-signed-in-size-small": { component: TopBarUserUserMenuTypeSignedInSizeSmall, width: 320.0, height: 164.0, kind: "leaf", group: "top-bar", shapeCount: 14 },
  "top-bar/user/user-menu/type-loading-sign-in-size-regular": { component: TopBarUserUserMenuTypeLoadingSignInSizeRegular, width: 320.0, height: 200.0, kind: "leaf", group: "top-bar", shapeCount: 10 },
  "top-bar/user/user-menu/type-signed-in-size-regular": { component: TopBarUserUserMenuTypeSignedInSizeRegular, width: 320.0, height: 417.0, kind: "leaf", group: "top-bar", shapeCount: 23 },
  "top-bar/user/user-menu/type-sign-in-size-small": { component: TopBarUserUserMenuTypeSignInSizeSmall, width: 320.0, height: 316.0, kind: "leaf", group: "top-bar", shapeCount: 28 },
  "top-bar/app/app-button": { component: TopBarAppAppButton, width: 256.0, height: 208.0, kind: "composite", group: "top-bar", shapeCount: 14 },
  "top-bar/app/app-button/type-regular": { component: TopBarAppAppButtonTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 1 },
  "top-bar/app/app-button/type-pinned-apps": { component: TopBarAppAppButtonTypePinnedApps, width: 192.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 13 },
  "top-bar/app/app-menu": { component: TopBarAppAppMenu, width: 792.0, height: 1280.0, kind: "composite", group: "top-bar", shapeCount: 316 },
  "top-bar/app/app-menu/expand-false-size-small": { component: TopBarAppAppMenuExpandFalseSizeSmall, width: 304.0, height: 304.0, kind: "leaf", group: "top-bar", shapeCount: 59 },
  "top-bar/app/app-menu/expand-false-size-large": { component: TopBarAppAppMenuExpandFalseSizeLarge, width: 360.0, height: 384.0, kind: "leaf", group: "top-bar", shapeCount: 59 },
  "top-bar/app/app-menu/expand-true-size-small": { component: TopBarAppAppMenuExpandTrueSizeSmall, width: 304.0, height: 688.0, kind: "leaf", group: "top-bar", shapeCount: 99 },
  "top-bar/app/app-menu/expand-true-size-large": { component: TopBarAppAppMenuExpandTrueSizeLarge, width: 360.0, height: 768.0, kind: "leaf", group: "top-bar", shapeCount: 99 },
  "top-bar/system/system-button": { component: TopBarSystemSystemButton, width: 650.0, height: 496.0, kind: "composite", group: "top-bar", shapeCount: 91 },
  "top-bar/system/system-button/type-condensed-state-enabled": { component: TopBarSystemSystemButtonTypeCondensedStateEnabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 1 },
  "top-bar/system/system-button/type-condensed-state-hover": { component: TopBarSystemSystemButtonTypeCondensedStateHover, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 2 },
  "top-bar/system/system-button/type-condensed-state-active": { component: TopBarSystemSystemButtonTypeCondensedStateActive, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 2 },
  "top-bar/system/system-button/type-condensed-state-focused": { component: TopBarSystemSystemButtonTypeCondensedStateFocused, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 3 },
  "top-bar/system/system-button/type-condensed-state-disabled": { component: TopBarSystemSystemButtonTypeCondensedStateDisabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 1 },
  "top-bar/system/system-button/type-expanded-state-enabled": { component: TopBarSystemSystemButtonTypeExpandedStateEnabled, width: 176.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 12 },
  "top-bar/system/system-button/type-expanded-state-hover": { component: TopBarSystemSystemButtonTypeExpandedStateHover, width: 176.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 13 },
  "top-bar/system/system-button/type-expanded-state-active": { component: TopBarSystemSystemButtonTypeExpandedStateActive, width: 176.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 13 },
  "top-bar/system/system-button/type-expanded-state-focused": { component: TopBarSystemSystemButtonTypeExpandedStateFocused, width: 176.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 14 },
  "top-bar/system/system-button/type-expanded-state-disabled": { component: TopBarSystemSystemButtonTypeExpandedStateDisabled, width: 176.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 12 },
  "top-bar/system/system-button/type-actions-state-enabled": { component: TopBarSystemSystemButtonTypeActionsStateEnabled, width: 266.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 18 },
  "top-bar/system/system-menu/type-menu-regular": { component: TopBarSystemSystemMenuTypeMenuRegular, width: 320.0, height: 504.0, kind: "leaf", group: "top-bar", shapeCount: 48 },
  "top-bar/system/system-menu/type-menu-condensed": { component: TopBarSystemSystemMenuTypeMenuCondensed, width: 320.0, height: 312.0, kind: "leaf", group: "top-bar", shapeCount: 44 },
  "top-bar/system/system-menu/type-wi-fi-on": { component: TopBarSystemSystemMenuTypeWiFiOn, width: 320.0, height: 568.0, kind: "leaf", group: "top-bar", shapeCount: 34 },
  "top-bar/system/system-menu/type-wi-fi-off": { component: TopBarSystemSystemMenuTypeWiFiOff, width: 320.0, height: 568.0, kind: "leaf", group: "top-bar", shapeCount: 32 },
  "top-bar/system/system-menu/type-audio-on": { component: TopBarSystemSystemMenuTypeAudioOn, width: 320.0, height: 472.0, kind: "leaf", group: "top-bar", shapeCount: 38 },
  "top-bar/system/system-menu/type-audio-off": { component: TopBarSystemSystemMenuTypeAudioOff, width: 320.0, height: 472.0, kind: "leaf", group: "top-bar", shapeCount: 36 },
  "top-bar/system/system-menu/type-microphone-on": { component: TopBarSystemSystemMenuTypeMicrophoneOn, width: 320.0, height: 528.0, kind: "leaf", group: "top-bar", shapeCount: 42 },
  "top-bar/system/system-menu/type-microphone-off": { component: TopBarSystemSystemMenuTypeMicrophoneOff, width: 320.0, height: 528.0, kind: "leaf", group: "top-bar", shapeCount: 43 },
  "top-bar/system/system-menu/type-battery": { component: TopBarSystemSystemMenuTypeBattery, width: 320.0, height: 528.0, kind: "leaf", group: "top-bar", shapeCount: 33 },
  "top-bar/system/system-menu/type-wi-fi-small-screen": { component: TopBarSystemSystemMenuTypeWiFiSmallScreen, width: 317.0, height: 375.0, kind: "leaf", group: "top-bar", shapeCount: 43 },
  "top-bar/system/system-menu/type-audio-small-screen": { component: TopBarSystemSystemMenuTypeAudioSmallScreen, width: 317.0, height: 375.0, kind: "leaf", group: "top-bar", shapeCount: 53 },
  "top-bar/system/system-menu/type-microphone-small-screen": { component: TopBarSystemSystemMenuTypeMicrophoneSmallScreen, width: 317.0, height: 375.0, kind: "leaf", group: "top-bar", shapeCount: 58 },
  "top-bar/system/system-menu/type-battery-small-screen": { component: TopBarSystemSystemMenuTypeBatterySmallScreen, width: 317.0, height: 375.0, kind: "leaf", group: "top-bar", shapeCount: 49 },
  "top-bar/brilliance-menu/options-palette-day": { component: TopBarBrillianceMenuOptionsPaletteDay, width: 320.0, height: 328.0, kind: "leaf", group: "top-bar", shapeCount: 53 },
  "top-bar/brilliance-menu/options-palette-dusk": { component: TopBarBrillianceMenuOptionsPaletteDusk, width: 320.0, height: 328.0, kind: "leaf", group: "top-bar", shapeCount: 55 },
  "top-bar/brilliance-menu/options-palette-night": { component: TopBarBrillianceMenuOptionsPaletteNight, width: 320.0, height: 328.0, kind: "leaf", group: "top-bar", shapeCount: 52 },
  "top-bar/brilliance-menu/options-palette-bright": { component: TopBarBrillianceMenuOptionsPaletteBright, width: 320.0, height: 328.0, kind: "leaf", group: "top-bar", shapeCount: 52 },
  "top-bar/brilliance-menu/options-brilliance-lm": { component: TopBarBrillianceMenuOptionsBrillianceLm, width: 320.0, height: 336.0, kind: "leaf", group: "top-bar", shapeCount: 60 },
  "top-bar/brilliance-menu/options-brilliance": { component: TopBarBrillianceMenuOptionsBrilliance, width: 320.0, height: 304.0, kind: "leaf", group: "top-bar", shapeCount: 46 },
  "top-bar/brilliance-menu/options-brilliance-and-palette": { component: TopBarBrillianceMenuOptionsBrillianceAndPalette, width: 320.0, height: 600.0, kind: "leaf", group: "top-bar", shapeCount: 60 },
  "top-bar/brilliance-menu/options-condenced": { component: TopBarBrillianceMenuOptionsCondenced, width: 320.0, height: 416.0, kind: "leaf", group: "top-bar", shapeCount: 27 },
  "top-bar/brilliance-menu/options-brilliance-and-palette-small-screen": { component: TopBarBrillianceMenuOptionsBrillianceAndPaletteSmallScreen, width: 317.0, height: 320.0, kind: "leaf", group: "top-bar", shapeCount: 48 },
  "top-bar/brilliance-menu/brilliance-button": { component: TopBarBrillianceMenuBrillianceButton, width: 255.0, height: 184.0, kind: "composite", group: "top-bar", shapeCount: 21 },
  "top-bar/brilliance-menu/brilliance-button/type-regular": { component: TopBarBrillianceMenuBrillianceButtonTypeRegular, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 1 },
  "top-bar/brilliance-menu/brilliance-button/type-actions": { component: TopBarBrillianceMenuBrillianceButtonTypeActions, width: 191.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 10 },
  "top-bar/calendar/type-large": { component: TopBarCalendarTypeLarge, width: 780.0, height: 408.0, kind: "leaf", group: "top-bar", shapeCount: 139 },
  "top-bar/calendar/type-regular": { component: TopBarCalendarTypeRegular, width: 360.0, height: 630.0, kind: "leaf", group: "top-bar", shapeCount: 132 },
  "top-bar/calendar/type-small": { component: TopBarCalendarTypeSmall, width: 352.0, height: 410.0, kind: "leaf", group: "top-bar", shapeCount: 69 },
  "top-bar/calendar/type-xlarge": { component: TopBarCalendarTypeXlarge, width: 1600.0, height: 900.0, kind: "leaf", group: "top-bar", shapeCount: 268 },
  "top-bar/button": { component: TopBarButton, width: 1432.0, height: 800.0, kind: "leaf", group: "top-bar", shapeCount: 15 },
  "top-bar/building-block-calendar/date-item": { component: TopBarBuildingBlockCalendarDateItem, width: 971.0, height: 935.0, kind: "composite", group: "top-bar", shapeCount: 180 },
  "top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateEnabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-checked-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateEnabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateEnabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 2 },
  "top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateHover, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-checked-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateHover, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateHover, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 3 },
  "top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateActive, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-checked-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateActive, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateActive, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 3 },
  "top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateDisabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 3 },
  "top-bar/building-block-calendar/date-item/size-small-type-checked-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateDisabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateDisabled, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 2 },
  "top-bar/building-block-calendar/date-item/size-small-type-enhanced-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeEnhancedStateFocused, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
  "top-bar/building-block-calendar/date-item/size-small-type-checked-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeCheckedStateFocused, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
  "top-bar/building-block-calendar/date-item/size-small-type-unchecked-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeSmallTypeUncheckedStateFocused, width: 48.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 4 },
  "top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateEnabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateEnabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/date-item/size-large-type-checked-state-enabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateEnabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateHover, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateHover, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/date-item/size-large-type-checked-state-hover": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateHover, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateActive, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateActive, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/date-item/size-large-type-checked-state-active": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateActive, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 9 },
  "top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateFocused, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 10 },
  "top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateFocused, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 8 },
  "top-bar/building-block-calendar/date-item/size-large-type-checked-state-focused": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateFocused, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 10 },
  "top-bar/building-block-calendar/date-item/size-large-type-enhanced-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeEnhancedStateDisabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/date-item/size-large-type-unchecked-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeUncheckedStateDisabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/date-item/size-large-type-checked-state-disabled": { component: TopBarBuildingBlockCalendarDateItemSizeLargeTypeCheckedStateDisabled, width: 201.0, height: 155.0, kind: "leaf", group: "top-bar", shapeCount: 8 },
  "top-bar/building-block-calendar/event-list": { component: TopBarBuildingBlockCalendarEventList, width: 320.0, height: 149.0, kind: "leaf", group: "top-bar", shapeCount: 17 },
  "top-bar/building-block-calendar/event-item": { component: TopBarBuildingBlockCalendarEventItem, width: 1024.0, height: 638.0, kind: "composite", group: "top-bar", shapeCount: 115 },
  "top-bar/building-block-calendar/event-item/state-color-coded-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStateColorCodedTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-color-coded-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStateColorCodedTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 8 },
  "top-bar/building-block-calendar/event-item/state-color-coded-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStateColorCodedTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-enabled-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStateEnabledTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
  "top-bar/building-block-calendar/event-item/state-enabled-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStateEnabledTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-enabled-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStateEnabledTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
  "top-bar/building-block-calendar/event-item/state-hover-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStateHoverTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-hover-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStateHoverTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-hover-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStateHoverTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-pressed-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStatePressedTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-pressed-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStatePressedTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-pressed-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStatePressedTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-focused-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStateFocusedTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-focused-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStateFocusedTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 8 },
  "top-bar/building-block-calendar/event-item/state-focused-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStateFocusedTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 7 },
  "top-bar/building-block-calendar/event-item/state-disabled-type-single-line": { component: TopBarBuildingBlockCalendarEventItemStateDisabledTypeSingleLine, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
  "top-bar/building-block-calendar/event-item/state-disabled-type-double-line": { component: TopBarBuildingBlockCalendarEventItemStateDisabledTypeDoubleLine, width: 288.0, height: 56.0, kind: "leaf", group: "top-bar", shapeCount: 6 },
  "top-bar/building-block-calendar/event-item/state-disabled-type-aggregated": { component: TopBarBuildingBlockCalendarEventItemStateDisabledTypeAggregated, width: 288.0, height: 48.0, kind: "leaf", group: "top-bar", shapeCount: 5 },
} as const;

export type OpenBridgeAssetKey = keyof typeof openBridgeAssetRegistry;

export function OpenBridgeAsset({ asset, ...props }: { asset: OpenBridgeAssetKey } & OpenBridgeAssetProps) {
  const entry = openBridgeAssetRegistry[asset];
  const Component: any = entry.component;
  return <Component {...props} />;
}
