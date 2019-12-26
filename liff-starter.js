window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "label": "Line",
        "uri": "https://linecorp.com/"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Brown Cafe",
          "size": "xl",
          "weight": "bold"
        },
        {
          "type": "box",
          "layout": "baseline",
          "margin": "md",
          "contents": [
            {
              "type": "icon",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
              "size": "sm"
            },
            {
              "type": "icon",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
              "size": "sm"
            },
            {
              "type": "icon",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
              "size": "sm"
            },
            {
              "type": "icon",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
              "size": "sm"
            },
            {
              "type": "icon",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "4.0",
              "flex": 0,
              "margin": "md",
              "size": "sm",
              "color": "#999999"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "margin": "lg",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Place",
                  "flex": 1,
                  "size": "sm",
                  "color": "#AAAAAA"
                },
                {
                  "type": "text",
                  "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                  "flex": 5,
                  "size": "sm",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Time",
                  "flex": 1,
                  "size": "sm",
                  "color": "#AAAAAA"
                },
                {
                  "type": "text",
                  "text": "10:00 - 23:00",
                  "flex": 5,
                  "size": "sm",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "flex": 0,
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "CALL",
            "uri": "https://linecorp.com"
          },
          "height": "sm",
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "WEBSITE",
            "uri": "https://linecorp.com"
          },
          "height": "sm",
          "style": "link"
        },
        {
          "type": "spacer",
          "size": "sm"
        }
      ]
    }
  }
}, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}
