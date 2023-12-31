// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $account from "./routes/account.tsx";
import * as $api_account_delete from "./routes/api/account/delete.ts";
import * as $api_domains_add from "./routes/api/domains/add.ts";
import * as $api_domains_remove from "./routes/api/domains/remove.ts";
import * as $api_keys_add from "./routes/api/keys/add.ts";
import * as $api_keys_remove from "./routes/api/keys/remove.ts";
import * as $api_login from "./routes/api/login.ts";
import * as $api_login_verify from "./routes/api/login/verify.ts";
import * as $api_signup from "./routes/api/signup.ts";
import * as $api_signup_verify from "./routes/api/signup/verify.ts";
import * as $auth_set_token from "./routes/auth/set-token.ts";
import * as $failure from "./routes/failure.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $login_verify from "./routes/login/verify.tsx";
import * as $logout from "./routes/logout.ts";
import * as $signup from "./routes/signup.tsx";
import * as $signup_success from "./routes/signup/success.tsx";
import * as $signup_verify from "./routes/signup/verify.tsx";
import * as $success from "./routes/success.tsx";
import * as $BobSignup from "./islands/BobSignup.tsx";
import * as $Challenge from "./islands/Challenge.tsx";
import * as $VerifyForm from "./islands/VerifyForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/account.tsx": $account,
    "./routes/api/account/delete.ts": $api_account_delete,
    "./routes/api/domains/add.ts": $api_domains_add,
    "./routes/api/domains/remove.ts": $api_domains_remove,
    "./routes/api/keys/add.ts": $api_keys_add,
    "./routes/api/keys/remove.ts": $api_keys_remove,
    "./routes/api/login.ts": $api_login,
    "./routes/api/login/verify.ts": $api_login_verify,
    "./routes/api/signup.ts": $api_signup,
    "./routes/api/signup/verify.ts": $api_signup_verify,
    "./routes/auth/set-token.ts": $auth_set_token,
    "./routes/failure.tsx": $failure,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/login/verify.tsx": $login_verify,
    "./routes/logout.ts": $logout,
    "./routes/signup.tsx": $signup,
    "./routes/signup/success.tsx": $signup_success,
    "./routes/signup/verify.tsx": $signup_verify,
    "./routes/success.tsx": $success,
  },
  islands: {
    "./islands/BobSignup.tsx": $BobSignup,
    "./islands/Challenge.tsx": $Challenge,
    "./islands/VerifyForm.tsx": $VerifyForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
