import express from 'express';
import templatesService from '../controllers/templates.js';


// router
const router = express.Router();

// @desc    Homepage
// @route   GET /
router.get('/', (req, res) => {

  // récupère les informations des templates
  const templates = templatesService.getTemplates();

  res.render('index', {
    title: "FNRASEC Winlink Templates",
    templates
  });
});


// @desc   AR_Initial
// @route   GET /FNRASEC_AR_Initial
router.get('/FNRASEC_AR_Initial', (req, res) => {

  // récupère les informations du template AR 
  const template = templatesService.getTemplateInfo('AR');

  // récupère le contenu du fichier AR_Help.hbs
  //const helpContent = templatesService.getHelpContent(template.name);

  // affiche le template AR_Initial
  res.render(`templates/${template.name}/${template.files.initial}`, {
    ...template,
    help: "yes" //helpContent
  });
});


// @desc   AR_Initial
// @route   GET /FNRASEC_AR_Viewer
router.get('/FNRASEC_AR_Viewer', (req, res) => {

  // récupère les informations du template AR 
  const template = templatesService.getTemplateInfo('AR');

  // affiche le template AR_Viewer
  res.render(`templates/${template.name}/${template.files.viewer}`, {
    ...template
  });
});

// @desc   MessageExercice_Initial
// @route   GET /FNRASEC_MessageExercice_Initial
router.get('/FNRASEC_MessageExercice_Initial', (req, res) => {

  // récupère les informations du template MessageExercice 
  const template = templatesService.getTemplateInfo('MessageExercice');

  // affiche le template AR_Viewer
  res.render(`templates/${template.name}/${template.files.initial}`, {
    ...template,
    help: "yes"
  });
});

// @desc   MessageExercice_Viewer
// @route   GET /FNRASEC_MessageExercice_Viewer
router.get('/FNRASEC_MessageExercice_Viewer', (req, res) => {

  // récupère les informations du template MessageExercice 
  const template = templatesService.getTemplateInfo('MessageExercice');  

  // affiche le template AR_Viewer
  res.render(`templates/${template.name}/${template.files.viewer}`, {
    ...template
  });
});

// @desc   MessageCommandement_Initial
// @route   GET /FNRASEC_MessageCommandement_Initial
router.get('/FNRASEC_MessageCommandement_Initial', (req, res) => {

  // récupère les informations du template MessageCommandement 
  const template = templatesService.getTemplateInfo('MessageCommandement');

  // affiche le template AR_Viewer
  res.render(`templates/${template.name}/${template.files.initial}`, {
    ...template,
    help: "yes"
  });
});

// @desc   MessageCommandement_Viewer
// @route   GET /FNRASEC_MessageCommandement_Viewer
router.get('/FNRASEC_MessageCommandement_Viewer', (req, res) => {

  // récupère les informations du template MessageCommandement 
  const template = templatesService.getTemplateInfo('MessageCommandement');

  // affiche le template AR_Viewer
  res.render(`templates/${template.name}/${template.files.viewer}`, {
    ...template
  });
});

// @desc    About
// @route   GET /about
router.get('/about', (req, res) => {
  res.render("about", {
    title: "About"
  });
});



// @desc    Get template information
// @route   GET /templates/:name
router.get('/templates/:name', (req, res) => {
  const templateInfo = templatesService.getTemplateInfo(req.params.name);
  res.json(templateInfo);
});

// @desc    Get all templates
// @route   GET /templates
router.get('/templates', (req, res) => {
  const templates = templatesService.getTemplates();
  res.json(templates);
});

// PUT /templates/:name
router.put('/templates/:name', (req, res) => {
  const templateName = req.params.name;
  const template = req.body;
  templatesService.saveTemplate(template);
  res.json(template);
});


// // @desc    Generic POST fonction : Display body of the request
// // @route   POST /post
// router.post("/post", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
//   //res.send("Post page. \nSee log please....");
// });


export default router;
