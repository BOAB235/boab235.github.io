// Main page configuration
const mainConfig = {
  title: "1200W 400V/48V LLC DC-DC Converter Design",
  description: "This work presents an open-source design and experimental evaluation of an LLC resonant DC-DC converter. The project includes hardware development based on planar magnetic components, firmware implementation on an STM32 microcontroller, and comprehensive converter testing. It serves as an effective introductory platform for understanding the practical and industrial challenges associated with power electronics design.",
  image: "imgs/dcdc_all2.png",  // Add your main image path here or leave empty ""
  mainLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC"
};

// Project data - tabs, subtabs, and projects
const projectData = [
  {
    tabTitle: "Hardware Design",
    tabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design",
    subtabs: [
      {
        subtabTitle: "Design Justification",
        subtabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/01_design_justification",
        projects: [
          {
            title: "LLC Tank Choice",
            description: "Design and optimization of the LLC resonant tank parameters.",
            image: "pdfs/01_LLC_48v_LLC_tank_design_note_v2.png",
            pdf: "pdfs/01_LLC_48v_LLC_tank_design_note_v2.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/01_design_justification/01_llc_tank"
          },
          {
            title: "Resonant and Output Capacitor",
            description: "Selection and design of resonant capacitors and output capacitors.",
            image: "pdfs/03_LLC_48v_LLC_output_capa_v4.png",
            pdf: "pdfs/03_LLC_48v_LLC_output_capa_v4.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/01_design_justification/03_Resonant_and_Output_Capacitor"
          },
          {
            title: "Design of Magnetic Cores Lm and Lr",
            description: "Magnetic core selection and design for transformer and resonant inductor optimization.",
            image: "pdfs/01_LLC_48v_LLC_Magnetic_Cores_V3.png",
            pdf: "pdfs/01_LLC_48v_LLC_Magnetic_Cores_V3.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/01_design_justification/01_transformer_and_Lr_cores"
          }
        ]
      },
      {
        subtabTitle: "Schematic and BOM",
        subtabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/02_schematic_and_bom",
        projects: [
          {
            title: "Schematic used to make the PCB",
            description: "The frizzing schematic used to make the PCB. Open the folder to found pcb layout, the KiCad project and the BOM...",
            image: "pdfs/LLC_DCDC_V5.png",
            pdf: "pdfs/LLC_DCDC_V5.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/02_schematic_and_bom/01_Schematics_BOM/LLC_DCDC_V5"
          }, 

          {
            title: "Gerber and layout (used to make the PCB)",
            description: "Exported gerber files as pdf used for PCB fabrication. Open the folder to found the gerber files",
            image: "pdfs/LLC_DCDC_V5_Gerber_and_layout.png",
            pdf: "pdfs/LLC_DCDC_V5_Gerber_and_layout.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/02_schematic_and_bom/01_Schematics_BOM/LLC_DCDC_V5/gerber-pdf"
          }, 
          
          {
            title: "Bill of Materials (BOM)",
            description: "Exported BOM as pdf used for PCB fabrication. Open the folder to found the BOM files",
            image: "pdfs/LLC_DCDC_V5_BOM.png",
            pdf: "pdfs/LLC_DCDC_V5_BOM.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/02_schematic_and_bom/01_Schematics_BOM"
          }, 
          {
            title: "Modified schematic (Final version)",
            description: "TBD",
            image: "pdfs/LLC_DCDC_V5_Modifications.png",
            pdf: "pdfs/LLC_DCDC_V5_Modifications.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/03_hw_design/02_schematic_and_bom/01_Schematics_BOM/LLC_DCDC_V5_Modifications"
          }
        ]
      }
      // Add more subtabs here:
      // {
      //   subtabTitle: "Schematic",
      //   subtabLink: "https://github.com/...",
      //   projects: [...]
      // }
    ]
  },
  {
    tabTitle: "Test & Validation",
    tabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations",
    subtabs: [
      {
        subtabTitle: "Asseembly Tests",
        subtabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations",
        projects: [
          {
            title: "EMI: Conducted Emissions Test",
            description: "EMC testing and validation for conducted emissions",
            image: "pdfs/EMC_Conducted_Emissions_Test_V4.png",
            pdf: "pdfs/EMC_Conducted_Emissions_Test_V4.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations/02_emc/01_Conducted_Emissions_Test"
          }, 

          {
            title: "LLC Efficiency Test",
            description: "Efficiency testing and validation for the LLC converter",
            image: "pdfs/LLC_1200W_Efficiency_test.jpg",
            pdf: "pdfs/LLC_1200W_Efficiency_test.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations/09_LLC_Efficiency"
          }, 

          {
            title: "LLC, Safety tests",
            description: "Safety testing and validation for the LLC converter: Capacitor discharge test and insulation test",
            image: "pdfs/LLC_Safety_tests_V0.png",
            pdf: "pdfs/LLC_Safety_tests_V0.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations/03_safety"
          }
        ]
      }
      , 
      {
        subtabTitle: "Subsystem-Level Tests",
        subtabLink: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations",
        projects: [
          {
            title: "Gain, Lr and Lm characterization",
            description: "Characterization of the LLC tank parameters (Gain, Lr and Lm) using 4 methods",
            image: "pdfs/Gain_and_tank_characterization_V0.png",
            pdf: "pdfs/Gain_and_tank_characterization_V0.pdf",
            folder: "https://github.com/BOAB235/Design_of_1200W_LLC_DCDC/tree/main/05_validations/05_Gain_and_LLC_Tank_charac"
            
          }
        ]
      }

    ]
  }, 
  
  





  {
    tabTitle: "Gallery and photos",
    tabLink: "https://github.com/BOAB235/boab235.github.io/tree/main/pages/llc/imgs/gal",
    subtabs: [

     {
        subtabTitle: "LLC DC-DC photos",
        subtabLink: "https://github.com/BOAB235/boab235.github.io/tree/main/pages/llc/imgs/gal/f2",
        galleryImages: 
['imgs//gal//f2//img_17.jpg',
'imgs//gal//f2//img_18.jpg',
'imgs//gal//f2//img_19.jpg',
'imgs//gal//f2//img_20.jpg',
'imgs//gal//f2//img_21.jpg',
'imgs//gal//f2//img_22.jpg',
'imgs//gal//f2//img_23.jpg',
'imgs//gal//f2//img_24.jpg',
'imgs//gal//f2//img_25.jpg',
'imgs//gal//f2//img_26.jpg',
'imgs//gal//f2//img_27.jpg',
'imgs//gal//f2//img_28.jpg',
'imgs//gal//f2//img_29.jpg',
'imgs//gal//f2//img_30.jpg',
'imgs//gal//f2//img_31.jpg',
'imgs//gal//f2//img_32.jpg',
'imgs//gal//f2//img_33.jpg',
'imgs//gal//f2//img_34.jpg',
'imgs//gal//f2//img_35.jpg',
'imgs//gal//f2//img_36.jpg',
'imgs//gal//f2//img_37.jpg',
'imgs//gal//f2//img_38.jpg',
'imgs//gal//f2//img_39.jpg',
'imgs//gal//f2//img_40.jpg',
'imgs//gal//f2//img_41.jpg',
'imgs//gal//f2//img_42.jpg',
'imgs//gal//f2//img_43.jpg',
'imgs//gal//f2//img_44.jpg',
'imgs//gal//f2//img_45.jpg',
'imgs//gal//f2//img_46.jpg',
'imgs//gal//f2//img_47.jpg',
'imgs//gal//f2//img_48.jpg',
'imgs//gal//f2//img_49.jpg',
'imgs//gal//f2//img_50.jpg',
'imgs//gal//f2//img_17.jpg',
'imgs//gal//f2//img_18.jpg',
'imgs//gal//f2//img_19.jpg',
'imgs//gal//f2//img_20.jpg',
'imgs//gal//f2//img_21.jpg',
'imgs//gal//f2//img_22.jpg',
'imgs//gal//f2//img_23.jpg',
'imgs//gal//f2//img_24.jpg',
'imgs//gal//f2//img_25.jpg',
'imgs//gal//f2//img_26.jpg',
'imgs//gal//f2//img_27.jpg',
'imgs//gal//f2//img_28.jpg',
'imgs//gal//f2//img_29.jpg',
'imgs//gal//f2//img_30.jpg',
'imgs//gal//f2//img_31.jpg',
'imgs//gal//f2//img_32.jpg',
'imgs//gal//f2//img_33.jpg',
'imgs//gal//f2//img_34.jpg',
'imgs//gal//f2//img_35.jpg',
'imgs//gal//f2//img_36.jpg',
'imgs//gal//f2//img_37.jpg',
'imgs//gal//f2//img_38.jpg',
'imgs//gal//f2//img_39.jpg',
'imgs//gal//f2//img_40.jpg',
'imgs//gal//f2//img_41.jpg',
'imgs//gal//f2//img_42.jpg',
'imgs//gal//f2//img_43.jpg',
'imgs//gal//f2//img_44.jpg',
'imgs//gal//f2//img_45.jpg',
'imgs//gal//f2//img_46.jpg',
'imgs//gal//f2//img_47.jpg',
'imgs//gal//f2//img_48.jpg',
'imgs//gal//f2//img_49.jpg',
'imgs//gal//f2//img_50.jpg', 
'imgs//gal//f2//img_51.jpg']
      }, 

      {
        subtabTitle: "Kicad PCB screenshots",
        subtabLink: "https://github.com/BOAB235/boab235.github.io/tree/main/pages/llc/imgs/gal/f1",
        galleryImages: 
['imgs//gal//f1//img_0.png',
'imgs//gal//f1//img_1.png',
'imgs//gal//f1//img_10.png',
'imgs//gal//f1//img_11.png',
'imgs//gal//f1//img_12.png',
'imgs//gal//f1//img_13.png',
'imgs//gal//f1//img_14.png',
'imgs//gal//f1//img_15.png',
'imgs//gal//f1//img_16.png',
'imgs//gal//f1//img_2.png',
'imgs//gal//f1//img_3.png',
'imgs//gal//f1//img_4.png',
'imgs//gal//f1//img_5.png',
'imgs//gal//f1//img_51.png',
'imgs//gal//f1//img_52.png',
'imgs//gal//f1//img_6.png',
'imgs//gal//f1//img_7.png',
'imgs//gal//f1//img_8.png',
'imgs//gal//f1//img_9.png',
'imgs//gal//f1//img_0.png',
'imgs//gal//f1//img_1.png',
'imgs//gal//f1//img_10.png',
'imgs//gal//f1//img_11.png',
'imgs//gal//f1//img_12.png',
'imgs//gal//f1//img_13.png',
'imgs//gal//f1//img_14.png',
'imgs//gal//f1//img_15.png',
'imgs//gal//f1//img_16.png',
'imgs//gal//f1//img_2.png',
'imgs//gal//f1//img_3.png',
'imgs//gal//f1//img_4.png',
'imgs//gal//f1//img_5.png',
'imgs//gal//f1//img_51.png',
'imgs//gal//f1//img_52.png',
'imgs//gal//f1//img_6.png',
'imgs//gal//f1//img_7.png',
'imgs//gal//f1//img_8.png',
'imgs//gal//f1//img_9.png']
      }

    ]
  },



  // Add more tabs here:
  // {
  //   tabTitle: "New Tab",
  //   tabLink: "https://github.com/...",
  //   subtabs: [...]
  // }
];