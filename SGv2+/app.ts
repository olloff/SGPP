﻿/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Core.ts" />
/// <reference path="ModuleDefinition.ts" />
/// <reference path="FixedNavbar.ts" />
/// <reference path="ScrollingSidebar.ts" />
/// <reference path="LivePreview.ts" />
/// <reference path="GridView.ts" />
/// <reference path="CommentAndEnter.ts" />

(function ($) {

    var modules: { [s: string]: ModuleDefinition.SteamGiftsModule; } = {};

    var SGV2P: ModuleDefinition.Core = new ModuleDefinition.Core();
    
    var modulesNames: Array<string> = new Array<string>("GridView", "FixedNavbar", "ScrollingSidebar", "LivePreview", "CommentAndEnter");

    for (var pos in modulesNames) {
        var m: ModuleDefinition.SteamGiftsModule = new ModuleDefinition[modulesNames[pos]]();
        modules[m.name()] = m;

        SGV2P.log("Module " + m.name() + " init() call.");
        modules[m.name()].init();
    }

    $(document).ready(function () {
        for (var module in modules) {
            SGV2P.log("Module " + module + " render() call.");
            modules[module].render();
        }
    });


})(jQuery);