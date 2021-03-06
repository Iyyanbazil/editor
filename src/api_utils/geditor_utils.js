import { API_HOST } from ".";
// import grapesjs from 'grapesjs';
// import plugin from 'grapesjs-video-embed-manager';
// import 'grapesjs/dist/css/grapes.min.css';
export const styleManager = {
  appendTo: "#styles-container",
  sectors: [
    {
      name: "General",
      buildProps: [
        "float",
        "display",
        "position",
        "top",
        "right",
        "left",
        "bottom",
      ],
      properties: [
        {
          name: "Alignment",
          property: "float",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", className: "fa fa-times" },
            { value: "left", className: "fa fa-align-left" },
            { value: "right", className: "fa fa-align-right" },
          ],
        },
        { property: "position", type: "select" },
      ],
    },
    {
      name: "Dimension",
      open: false,
      buildProps: [
        "width",
        "flex-width",
        "height",
        // "max-width",
        // "min-height",
        "margin",
        "padding",
      ],
      properties: [
        {
          id: "flex-width",
          type: "integer",
          name: "Width",
          units: [ "px","%"],
          property: "flex-basis",
         
          // toRequire: 1,
        },
        {
          id: "flex-width",
          type: "slider",
          name: "Width",
          units: ["px", "%","em","rem"],
          property: "width",
         
          // toRequire: 1,
        },
        {
          id: "height",
          type: "slider",
          name: "Height",
          units: ["px", "%"],
          property: "height",
         
          // toRequire: 1,
        },
        {
          property: "margin",
          properties: [
            { name: "Top",type:"slider", units: ["px", "%","vh"], property: "margin-top" },
            { name: "Right",type:"slider",units: ["px", "%","vw"], property: "margin-right" },
            { name: "Bottom",type:"slider",units: ["px", "%","vh"], property: "margin-bottom" },
            { name: "Left",type:"slider",units: ["px", "%","vw"], property: "margin-left" },
          ],
        },
        {
          property: "padding",
          properties: [
            { name: "Top",type:"slider", property: "padding-top" },
            { name: "Right",type:"slider", property: "padding-right" },
            { name: "Bottom",type:"slider", property: "padding-bottom" },
            { name: "Left",type:"slider", property: "padding-left" },
          ],
        },
      ],
    },
    {
      name: "Typography",
      open: false,
      buildProps: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "text-align",
        "text-decoration",
        // "text-shadow",
      ],
      properties: [
        { name: "Font",property: "font-family" },
        { name: "Weight", property: "font-weight" },
        { name: "Font color", property: "color" },
        {name:"Font-size",type:"slider" ,property:"font-size"},
        {
          property: "text-align",
          type: "radio",
          defaults: "left",
          list: [
            { value: "left", name: "Left", className: "fa fa-align-left" },
            {
              value: "center",
              name: "Center",
              className: "fa fa-align-center",
            },
            { value: "right", name: "Right", className: "fa fa-align-right" },
            {
              value: "justify",
              name: "Justify",
              className: "fa fa-align-justify",
            },
          ],
        },
        {
          property: "text-decoration",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", name: "None", className: "fa fa-times" },
            {
              value: "underline",
              name: "underline",
              className: "fa fa-underline",
            },
            {
              value: "line-through",
              name: "Line-through",
              className: "fa fa-strikethrough",
            },
          ],
        },
        // {
        //   name:"text-shadow",property:"text-shadow-h "
        //   // property: "text-shadow",
        //   // properties: [
        //   //   { name: "X position", property: "text-shadow-h" },
        //   //   { name: "Y position", property: "text-shadow-v" },
        //   //   { name: "Blur", property: "text-shadow-blur-radius" },
        //   //   { name: "Color", property: "text-shadow-color" },
        //   // ],
        // },
      ],
    },
    {
      name: "Decorations",
      open: false,
      buildProps: [
        'box-shadow',
        "opacity",
        "border-radius",
        "border",
        "background-color",
      ],
      properties: [
        {
         
          property: 'box-shadow',
          properties: [
            { name: 'X position', property: 'box-shadow-h'},
            { name: 'Y position', property: 'box-shadow-v'},
            { name: 'Blur', property: 'box-shadow-blur'},
            { name: 'Spread', property: 'box-shadow-spread'},
            { name: 'Color', property: 'box-shadow-color'},
            { name: 'Shadow type', property: 'box-shadow-type'}
          ],
        },
        {
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
        {
          // type:"slider",
          property: "border-radius",
          properties: [
            { name: "Top",type:"slider", property: "border-top-left-radius" },
            { name: "Right",type:"slider", property: "border-top-right-radius" },
            { name: "Bottom",type:"slider", property: "border-bottom-left-radius" },
            { name: "Left",type:"slider",property: "border-bottom-right-radius" },
          ],
        },
        
        {
          id: "background-color",
          property: "background-color",
          type: "color",
        },
      ],
    },
    {
      name: "Rotate",
      open: false,
     
      buildProps: ["transition", "transform"],
      properties: [
        {
          property: "transition",
          properties: [
            { name: "Property", property: "transition-property"  },
            { name: "Duration", property: "transition-duration" },
            { name: "Easing", property: "transition-timing-function" },
            // { name: "loop", property: "transition-timing-function" },
          ],
        },
        {
          property: "transform",
          properties: [
            { name: "Rotate X", property: "transform-rotate-x",type: "slider" },
            { name: "Rotate Y", property: "transform-rotate-y",type: "slider" },
            { name: "Rotate Z", property: "transform-rotate-z",type: "slider" },
            { name: "Expand X", property: "transform-scale-x",type: "slider" },
            { name: "Expand Y", property: "transform-scale-y",type: "slider" },
            { name: "Expand Z", property: "transform-scale-z",type: "slider" },
          ],
        },
      ],
    },
    {
      name: "Positioning",
      open: false,
      properties: [
        {
          name: "Content position",
          property: "display",
          type: "select",
          defaults: "block",
          list: [
            { value: "block", name: "Disable" },
            { value: "flex", name: "Enable" },
          ],
        },
        {
          name: "Flex Parent",
          property: "label-parent-flex",
          type: "integer",
        },
        {
          name: "Direction",
          property: "flex-direction",
          type: "select",
          defaults: "row",
          list: [
            {
              value: "row",
              name: "Row",
              className: "icons-flex icon-dir-row",
              title: "Row",
            },
            {
              value: "row-reverse",
              name: "Row reverse",
              className: "icons-flex icon-dir-row-rev",
              title: "Row reverse",
            },
            {
              value: "column",
              name: "Column",
              title: "Column",
              className: "icons-flex icon-dir-col",
            },
            {
              value: "column-reverse",
              name: "Column reverse",
              title: "Column reverse",
              className: "icons-flex icon-dir-col-rev",
            },
          ],
        },
        {
          name: "Row Position",
          property: "justify-content",
          type: "select",
          defaults: "flex-start",
          list: [
            {
              value: "flex-start",
              name:"Row-start",
              className: "icons-flex icon-just-start",
              title: "Start",
            },
            {
              value: "flex-end",
              name:"end",
              title: "Row-end",
              className: "icons-flex icon-just-end",
            },
            {
              value: "space-between",
              title: "Space between",
              className: "icons-flex icon-just-sp-bet",
            },
            {
              value: "space-around",
              title: "Space around",
              className: "icons-flex icon-just-sp-ar",
            },
            {
              value: "center",
              title: "Center",
              name:"Row-center",
              className: "icons-flex icon-just-sp-cent",
            },
          ],
        },
        {
          name: "Column position",
          property: "align-items",
          type: "select",
          defaults: "center",
          list: [
            {
              value: "flex-start",
              title: "Start",
              name:"col-start",
              className: "icons-flex icon-al-start",
            },
            {
              value: "flex-end",
              title: "End",
              name:"col-end",
              className: "icons-flex icon-al-end",
            },
            {
              value: "stretch",
              title: "Stretch",
              className: "icons-flex icon-al-str",
            },
            {
              value: "center",
              title: "Center",
              name:"col-center",
              className: "icons-flex icon-al-center",
            },
          ],
        },
        {
          name: "Flex Children",
          property: "label-parent-flex",
          type: "integer",
        },
        // {
        //   name: "Order",
        //   property: "order",
        //   type: "integer",
        //   defaults: 0,
        //   min: 0,
        // },
        // {
        //   name: "Flex",
        //   property: "flex",
        //   type: "composite",
        //   properties: [
        //     {
        //       name: "Grow",
        //       property: "flex-grow",
        //       type: "integer",
        //       defaults: 0,
        //       min: 0,
        //     },
        //     {
        //       name: "Shrink",
        //       property: "flex-shrink",
        //       type: "integer",
        //       defaults: 0,
        //       min: 0,
        //     },
        //     {
        //       name: "Basis",
        //       property: "flex-basis",
        //       type: "integer",
        //       units: ["px", "%", ""],
        //       unit: "",
        //       defaults: "auto",
        //     },
        //   ],
        // },
        // {
        //   name: "Align",
        //   property: "align-self",
        //   type: "radio",
        //   defaults: "auto",
        //   list: [
        //     {
        //       value: "auto",
        //       name: "Auto",
        //     },
        //     {
        //       value: "flex-start",
        //       title: "Start",
        //       className: "icons-flex icon-al-start",
        //     },
        //     {
        //       value: "flex-end",
        //       title: "End",
        //       className: "icons-flex icon-al-end",
        //     },
        //     {
        //       value: "stretch",
        //       title: "Stretch",
        //       className: "icons-flex icon-al-str",
        //     },
        //     {
        //       value: "center",
        //       title: "Center",
        //       className: "icons-flex icon-al-center",
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export const layerManager = {
  appendTo: "#layers-container",
};
// export const StorageManager={
//   type:'remote',
//   stepsBeforeSave:3,
//   contentTypeJson:true,
//   storeComponents:true,
//   storeStyles:true,
//   storeHtml:true,
//   StoreCss:true,
//   id:"my-",
//   urlStore:`/pages/${location.pathname.split('/')[2]}/content`,
//   urlLoad:`/pages/${location.pathname.split('/')[2]}/content`,
// headers:{
// 'Content-Type':'application/json'
// }
// }
export const traitManager = {
  appendTo: "#trait-container",
};
export const selectorManager = {
  appendTo: "#styles-container",
};
export const panels = {
  
  defaults: [
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: '<i class="fa fa-clone"></i>',
          command: "sw-visibility", // Built-in command
        },
      ],
    },
    {
      id: "editor-actions",
      el: ".panel__editor",
      buttons: [
        {
          id: "saveDb",
          className: "fa fa-paper-plane btn-save",
          command: "saveDb",
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
        },
        {
          id: "export",
          className: "fa fa-download",
          command: "export",
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: '<i class="fa fa-television"></i>',
          command: "set-device-desktop",
          active: true,
          togglable: false,
        },
        {
          id: "device-mobile",
          label: '<i class="fa fa-mobile"></i>',
          command: "set-device-mobile",
          togglable: false,
        },
      
      ],
    },
  ],
};
export const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "1100px",
    },
    {
      name: "Mobile",
      width: "320px",
      widthMedia: "480px",
    },
    
  ],
};

export const addEditorCommand = (editor) => {
 
  // Commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  });


  // Save Button
  editor.Commands.add("saveDb", {
    run: (editor, sender) => {
      sender && sender.set("active");
      editor.store();
      editor.getHtml()
      alert("Save changes")
    },
  });

  //Clear Button
  editor.Commands.add("cmd-clear", {
    run: (editor) => {
      editor.DomComponents.clear();
      editor.CssComposer.clear();
    },
  });

  //Undo
  editor.Commands.add("undo", {
    run: (editor) => editor.UndoManager.undo(),
  });

  // Redo
  editor.Commands.add("redo", {
    run: (editor) => editor.UndoManager.redo(),
  });

  editor.Commands.add("export", {
    run: (editor) => editor.runCommand("gjs-export-zip"),
  });
};

export const storageSetting = (pageId) => {
  return {
    type: "remote",
    stepsBeforeSave: 3,
    contentTypeJson: true,
    storeComponents: true,
    storeStyles: true,
    storeHtml: true,
    storeCss: true,
    headers: {
      "Content-Type": "application/json",
    },
    id: "mycustom-",
    urlStore: `${API_HOST}pages/${pageId}/content`,
    urlLoad: `${API_HOST}pages/${pageId}/content`,
  };
};

export const scripts = [
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  "https://unpkg.com/swiper@7/swiper-bundle.min.js",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js",
 // ******* theme page cdn *******
  "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",

  // 6
  "https://unpkg.com/grapesjs",
  "https://unpkg.com/grapesjs-video-embed-manager"

  
  
];
export const styles = [
  "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
  "https://unpkg.com/swiper@7/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",

  // ******* theme page cdn *******
//  " https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
// // 2
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Lato",
// "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
// // 3
// "https://www.w3schools.com/w3css/4/w3.css",
// // 4
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Raleway",
// // 5
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Karma",
// // 6
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Oswald",
// "https://fonts.googleapis.com/css?family=Open Sans",
// "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
// // 9
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Amatic+SC",
// // 10
// "https://www.w3schools.com/w3css/4/w3.css",
// // 11
// "https://www.w3schools.com/w3css/4/w3.css",
// "https://fonts.googleapis.com/css?family=Raleway",
// // 12
// "https://www.w3schools.com/w3css/4/w3.css",
// // 13
// "https://www.w3schools.com/w3css/4/w3.css",
// 'https://fonts.googleapis.com/css?family=Roboto',
// "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
"https://www.w3schools.com/w3css/4/w3.css",
"https://www.w3schools.com/w3css/4/w3.css",
"https://fonts.googleapis.com/icon?family=Material+Icons",
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
"https://unpkg.com/grapesjs/dist/css/grapes.min.css",
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
];

export const toggleSidebar = (fromEditor) => {
  const sidebar = document.getElementById("navbar");
  const mainContent = document.getElementById("main-content");
  if (fromEditor) {
    sidebar.classList.remove("d-flex");
    sidebar.classList.add("d-none");
    mainContent.classList.remove("w-85", "start-15");
  } else if (sidebar.classList.contains("d-flex")) {
    sidebar.classList.remove("d-flex");
    sidebar.classList.add("d-none");
    mainContent.classList.remove("w-85", "start-15");
  } else {
    sidebar.classList.remove("d-none");
    sidebar.classList.add("d-flex");
    mainContent.classList.add("w-85", "start-15");
  }
};
