// sort-imports-ignore
/*
 * Copyright (c) Gala Games Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import "dotenv/config";

import { GalaContract, GalaJSONSerializer } from "@gala-chain/chaincode";

import { PublicKeyContract } from "./pk";
import { BagContract } from "./bag";

export const contracts: { new (): GalaContract }[] = [PublicKeyContract, BagContract];

export const serializers = {
  transaction: "galaJsonSerializer",
  serializers: {
    galaJsonSerializer: GalaJSONSerializer
  }
};
