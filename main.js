/* import CSS */

import "./style/style.css";
import "./style/accordian.css";
import "./style/callToAction.css";
import "./style/header.css";

/* import JS */

import { container } from "./script/body.js";
import { makeWholeList } from "./script/components/accordian.js";
import { callToAction } from "./script/components/callToAction.js";
import { accordianData, callToActionData } from "./script/data.js";
import { header } from "./script/components/header.js";

const app = document.querySelector("#app");

const headerDiv = app.appendChild(header());
headerDiv.id = "header";

/** Make a Container and put accordian inside**/

const accordianDiv = app.appendChild(container());
accordianDiv.id = "accordian";
accordianDiv.appendChild(makeWholeList(accordianData));

/** Make a Container and put callToAction inside**/

const callToActionDiv = app.appendChild(container());
callToActionDiv.id = "callToAction";
callToActionDiv.appendChild(callToAction(callToActionData));
