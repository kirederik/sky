// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var title = document.getElementsByTagName('title')[0].innerText

if (title.endsWith("Concourse")) {    console.log("match!");
  document.getElementsByTagName("body")[0].style = "background-image: url('http://chillestmonkey.com/img/monkey.gif'); background-size: cover;"
}
