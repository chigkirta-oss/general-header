document.addEventListener("DOMContentLoaded", function() {
    // 1. 共通のCSSスタイルを<head>に自動注入
    var css = `
        .dropdown.active .dropdown-content { display: block !important; }
        @media (hover: hover) {
            .dropdown:hover .dropdown-content { display: block !important; }
        }
        .dropdown-content a:hover {
            background-color: #f5f5f5;
            color: #ffaa00 !important;
        }
    `;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // 2. オレンジヘッダーのHTMLを注入
    var headerHTML = `
    <header style="background-color: #ffaa00; color: #111; padding: 15px 20px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000;">
        <h1 style="margin: 0; font-size: 20px;">ワイドミュラー(Weidmüller) UR20 簡易接続マニュアル</h1>
        <nav style="margin-top: 15px; display: flex; justify-content: center; gap: 15px;">
            
            <div class="dropdown" style="position: relative; display: inline-block;">
                <button onclick="toggleDropdown(event, this)" style="background-color: #ffffff; border: none; font-size: 13px; font-weight: bold; color: #111; cursor: pointer; padding: 8px 16px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 4px;">
                    三菱PLC マニュアル一覧 <span style="font-size: 10px; color: #666;">▼</span>
                </button>
                <div class="dropdown-content" style="display: none; position: absolute; left: 50%; transform: translateX(-50%); min-width: 180px; z-index: 1001; padding-top: 8px;">
                    <div style="background-color: #ffffff; box-shadow: 0px 8px 16px rgba(0,0,0,0.15); border-radius: 4px; overflow: hidden;">
                        <a href="https://chigkirta-oss.github.io/ur20-fscc-manual/" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left; border-bottom: 1px solid #eee;">CC-Link IE TSN編</a>
                        <a href="https://chigkirta-oss.github.io/ur20-eip-manual/" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left;">EtherNet/IP編</a>
                    </div>
                </div>
            </div>

            <div class="dropdown" style="position: relative; display: inline-block;">
                <button onclick="toggleDropdown(event, this)" style="background-color: #ffffff; border: none; font-size: 13px; font-weight: bold; color: #111; cursor: pointer; padding: 8px 16px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 4px;">
                    キーエンスPLC マニュアル一覧 <span style="font-size: 10px; color: #666;">▼</span>
                </button>
                <div class="dropdown-content" style="display: none; position: absolute; left: 50%; transform: translateX(-50%); min-width: 180px; z-index: 1001; padding-top: 8px;">
                    <div style="background-color: #ffffff; box-shadow: 0px 8px 16px rgba(0,0,0,0.15); border-radius: 4px; overflow: hidden;">
                        <a href="#" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left; border-bottom: 1px solid #eee;">KV-8000 EtherNet/IP編</a>
                        <a href="#" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left;">PROFINET編</a>
                    </div>
                </div>
            </div>

            <div class="dropdown" style="position: relative; display: inline-block;">
                <button onclick="toggleDropdown(event, this)" style="background-color: #ffffff; border: none; font-size: 13px; font-weight: bold; color: #111; cursor: pointer; padding: 8px 16px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 4px;">
                    u-remote 共通一覧 <span style="font-size: 10px; color: #666;">▼</span>
                </button>
                <div class="dropdown-content" style="display: none; position: absolute; left: 50%; transform: translateX(-50%); min-width: 180px; z-index: 1001; padding-top: 8px;">
                    <div style="background-color: #ffffff; box-shadow: 0px 8px 16px rgba(0,0,0,0.15); border-radius: 4px; overflow: hidden;">
                        <a href="https://chigkirta-oss.github.io/ur20-general/" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left; border-bottom: 1px solid #eee;">Webサーバ操作</a>
                        <a href="#" style="color: #333; padding: 12px 16px; text-decoration: none; display: block; font-size: 13px; text-align: left;">Q&A</a>
                    </div>
                </div>
            </div>

        </nav>
    </header>
    `;

    var target = document.getElementById("shared-header");
    if (target) {
        target.innerHTML = headerHTML;
    }
});

// スマホ用タップ開閉ロジック（各ページから呼べるようにwindowに紐付け）
window.toggleDropdown = function(event, button) {
    event.stopPropagation();
    var parent = button.parentElement;
    document.querySelectorAll('.dropdown').forEach(function(dd) {
        if (dd !== parent) dd.classList.remove('active');
    });
    parent.classList.toggle('active');
};

window.onclick = function() {
    document.querySelectorAll('.dropdown').forEach(function(dd) {
        dd.classList.remove('active');
    });
};
