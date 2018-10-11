import React from "react";

import AddBlank from "./add-blank.svg";
import Aggregated from "./aggregated.svg";
import ArrowToLeft from "./arrow-to-left.svg";
import ArrowToRight from "./arrow-to-right.svg";
import ArrowToUp from "./arrow-to-up.svg";
import ArrowToDown from "./arrow-to-down.svg";
import ArrowsFromCenter from "./arrows-from-center.svg";
import ArrowsToCenter from "./arrows-to-center.svg";
import BoxOnLoader from "./box-on-loader.svg";
import Cancel from "./cancel.svg";
import Cart from "./cart.svg";
import CheckBso from "./check-bso.svg";
import CheckBsoReturn from "./check-bso-return.svg";
import Checking from "./checking.svg";
import Checkmark from "./checkmark.svg";
import Cigarettes from "./cigarettes.svg";
import ClosedArrow from "./closed-arrow.svg";
import CodeInvalid from "./code-invalid.svg";
import Cross from "./cross.svg";
import CrossHumanIcon from "./cross-human-icon.svg";
import Disaggregated from "./disaggregated.svg";
import DocAggregation from "./doc-aggregation.svg";
import DocDisaggregation from "./doc-disaggregation.svg";
import EditBlank from "./edit-blank.svg";
import EditFilledBlank from "./edit-filled-blank.svg";
import Emission from "./emission.svg";
import Emitted from "./emitted.svg";
import ErrorForm from "./error-form.svg";
import FilledBlank from "./filled-blank.svg";
import FilledCart from "./filled-cart.svg";
import Formed from "./formed.svg";
import GroupBlock from "./group-block.svg";
import HumanIcon from "./human-icon.svg";
import Info from "./info.svg";
import NotAllow from "./not-allow.svg";
import Pan from "./pan.svg";
import PrintFlame from "./print-flame.svg";
import Star from "./star.svg";
import Truck from "./truck.svg";
import Filter from "./filter.svg";
import Notification from "./notification.svg";
import Edit from "./edit.svg";
import LogoCRPT from "./logo-crpt.svg";
import Download from "./download.svg";
import Search from "./search.svg";
import SoldOut from "./sold-out.svg";
import Phone from "./phone.svg";
import Mail from "./mail.svg";
import Pack from "./pack.svg";
import Block from "./block.svg";
import Box from "./box.svg";
import Utd from "./utd.svg";
import Utdi from "./utdi.svg";
import Agregation from "./agregation.svg";
import Issued from "./issued.svg";
import DocError from "./doc-error.svg";
import Member from "./member.svg";
import NotMember from "./not-member.svg";
import ChatSendArrow from "./chat-send-arrow.svg";
import Turnover from "./turnover.svg";
import WriteOffCode from "./write-off-code.svg";
import Ucd from "./ucd.svg";
import Ucdi from "./ucdi.svg";
import ErrorStatus from "./error-status.svg";
import Upd from "./upd.svg";
import Receipt from "./receipt.svg";
import ReceiptReturn from "./receipt-return.svg";
import LogoCrptTransparent from "./logo-crpt-transparent.svg";
import CalendarIcon from "./calendar-icon.svg";
import DownArrow from "./down-arrow.svg";
import UpArrow from "./up-arrow.svg";
import MenuHeaderFull from "./menu-header-full.svg";
import MenuHeaderFold from "./menu-header-fold.svg";
import MenuCISList from "./menu-cis-list.svg";
import MenuDocumentList from "./menu-document-list.svg";
import MenuProductList from "./menu-product-list.svg";
import MenuParticipantList from "./menu-participant-list.svg";
import MenuReport from "./menu-report.svg";
import MenuPacman from "./menu-pacman.svg";
import MenuRegistry from "./menu-registry.svg";
import AddPlus from "./add-plus.svg";
import Human2 from "./human-2.svg";
import BlackFilter from "./black-filter.svg";
import MenuOrderList from "./menu-order-list.svg";
import BlackDownload from "./black-download.svg";
import Cube3d from "./cube-3d.svg";
import Home from "./home.svg";
import Earth from "./earth.svg";
import List from "./list.svg";
import Recycle from "./recycle.svg";
import ReportTotal from "./report-total.svg";
import ReportProductionTotal from "./report-production-total.svg";
import ReportProductionPart from "./report-production-part.svg";
import ReportRealizationTotal from "./report-realization-total.svg";
import ReportRealizationPart from "./report-realization-part.svg";
import ReportTotalVolumes from "./report-total-volumes.svg";
import ReportRightArrow from "./report-right-arrow.svg";
import UserMenuProfile from "./user-menu-profile.svg";
import UserMenuQuit from "./user-menu-quit.svg";

import HelpAddHuman from "./help-add-human.svg";
import HelpAddProduct from "./help-add-product.svg";
import HelpOrderCode from "./help-order-code.svg";
import HelpShowData from "./help-show-data.svg";
import HelpQuestion from "./help-question.svg";

import NotAllowRed from "./not-allow-red.svg";
import CrossRed from "./cross-red.svg";
import Path from "./path.svg";

const ICONS = {
  "add-blank": props => <AddBlank {...props} />,
  aggregated: props => <Aggregated {...props} />,
  "arrow-to-left": props => <ArrowToLeft {...props} />,
  "arrow-to-right": props => <ArrowToRight {...props} />,
  "arrow-to-down": props => <ArrowToDown {...props} />,
  "arrow-to-up": props => <ArrowToUp {...props} />,
  "arrows-from-center": props => <ArrowsFromCenter {...props} />,
  "arrows-to-center": props => <ArrowsToCenter {...props} />,
  "box-on-loader": props => <BoxOnLoader {...props} />,
  cancel: props => <Cancel {...props} />,
  cart: props => <Cart {...props} />,
  "check-bso": props => <CheckBso {...props} />,
  "check-bso-return": props => <CheckBsoReturn {...props} />,
  checking: props => <Checking {...props} />,
  checkmark: props => <Checkmark {...props} />,
  cigarettes: props => <Cigarettes {...props} />,
  "closed-arrow": props => <ClosedArrow {...props} />,
  "code-invalid": props => <CodeInvalid {...props} />,
  cross: props => <Cross {...props} />,
  "cross-human-icon": props => <CrossHumanIcon {...props} />,
  disaggregated: props => <Disaggregated {...props} />,
  download: props => <Download {...props} />,
  "doc-aggregation": props => <DocAggregation {...props} />,
  "doc-disaggregation": props => <DocDisaggregation {...props} />,
  "edit-blank": props => <EditBlank {...props} />,
  "edit-filled-blank": props => <EditFilledBlank {...props} />,
  emission: props => <Emission {...props} />,
  emitted: props => <Emitted {...props} />,
  "error-form": props => <ErrorForm {...props} />,
  "filled-blank": props => <FilledBlank {...props} />,
  "filled-cart": props => <FilledCart {...props} />,
  formed: props => <Formed {...props} />,
  "group-block": props => <GroupBlock {...props} />,
  "human-icon": props => <HumanIcon {...props} />,
  info: props => <Info {...props} />,
  "not-allow": props => <NotAllow {...props} />,
  pan: props => <Pan {...props} />,
  "print-flame": props => <PrintFlame {...props} />,
  star: props => <Star {...props} />,
  truck: props => <Truck {...props} />,
  filter: props => <Filter {...props} />,
  notification: props => <Notification {...props} />,
  edit: props => <Edit {...props} />,
  "logo-crpt": props => <LogoCRPT {...props} />,
  search: props => <Search {...props} />,
  "sold-out": props => <SoldOut {...props} />,
  phone: props => <Phone {...props} />,
  mail: props => <Mail {...props} />,
  pack: props => <Pack {...props} />,
  block: props => <Block {...props} />,
  box: props => <Box {...props} />,
  utd: props => <Utd {...props} />,
  utdi: props => <Utdi {...props} />,
  agregation: props => <Agregation {...props} />,
  issued: props => <Issued {...props} />,
  "doc-error": props => <DocError {...props} />,
  member: props => <Member {...props} />,
  "not-member": props => <NotMember {...props} />,
  "chat-send-arrow": props => <ChatSendArrow {...props} />,
  turnover: props => <Turnover {...props} />,
  "write-off-code": props => <WriteOffCode {...props} />,
  ucd: props => <Ucd {...props} />,
  ucdi: props => <Ucdi {...props} />,
  "error-status": props => <ErrorStatus {...props} />,
  upd: props => <Upd {...props} />,
  receipt: props => <Receipt {...props} />,
  "receipt-return": props => <ReceiptReturn {...props} />,
  "logo-crpt-transparent": props => <LogoCrptTransparent {...props} />,
  "calendar-icon": props => <CalendarIcon {...props} />,
  "down-arrow": props => <DownArrow {...props} />,
  "up-arrow": props => <UpArrow {...props} />,
  "menu-header-full": props => <MenuHeaderFull {...props} />,
  "menu-header-fold": props => <MenuHeaderFold {...props} />,
  "menu-cis-list": props => <MenuCISList {...props} />,
  "menu-document-list": props => <MenuDocumentList {...props} />,
  "menu-product-list": props => <MenuProductList {...props} />,
  "menu-participant-list": props => <MenuParticipantList {...props} />,
  "menu-report": props => <MenuReport {...props} />,
  "menu-pacman": props => <MenuPacman {...props} />,
  "menu-registry": props => <MenuRegistry {...props} />,
  "add-plus": props => <AddPlus {...props} />,
  "human-2": props => <Human2 {...props} />,
  "black-filter": props => <BlackFilter {...props} />,
  "menu-order-list": props => <MenuOrderList {...props} />,
  "black-download": props => <BlackDownload {...props} />,
  "cube-3d": props => <Cube3d {...props} />,
  "home": props => <Home {...props} />,
  "earth": props => <Earth {...props} />,
  "list": props => <List {...props} />,
  "recycle": props => <Recycle {...props} />,
  "report-total": props => <ReportTotal {...props} />,
  "report-production-total": props => <ReportProductionTotal {...props} />,
  "report-production-part": props => <ReportProductionPart {...props} />,
  "report-realization-total": props => <ReportRealizationTotal {...props} />,
  "report-realization-part": props => <ReportRealizationPart {...props} />,
  "report-total-volumes": props => <ReportTotalVolumes {...props} />,
  "report-right-arrow": props => <ReportRightArrow {...props} />,
  "user-menu-profile": props => <UserMenuProfile {...props} />,
  "user-menu-quit": props => <UserMenuQuit {...props} />,
  "help-add-human": props => <HelpAddHuman {...props} />,
  "help-add-product": props => <HelpAddProduct {...props} />,
  "help-order-code": props => <HelpOrderCode {...props} />,
  "help-show-data": props => <HelpShowData {...props} />,
  "help-question": props => <HelpQuestion {...props} />,
  "not-allow-red": props => <NotAllowRed {...props} />,
  "cross-red": props => <CrossRed {...props} />,
  "path": props => <Path {...props} />,
};
export { ICONS };
