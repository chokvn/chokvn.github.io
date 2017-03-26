var i = 0;
document.addEventListener('DOMContentLoaded', function(){
  pubfunction(0);
});
function pubfunction(selector){
  i = selector;
  pubselector();
};
function pubselector(){
    var data = [{
        title: "General Overview",
        pubhref: "www.google.com",
        imgsrc: "genericchem.png",
        pubtitle: "cool"
      }, {
        title: "A Molecular Sensor",
        pubhref: "www.google.com",
        imgsrc: "chemcommun2013.gif",
        pubtitle: "Tetrathiofulvalene-annulated [28]hexaphyrin(1,1,1,1,1,1): a multi-electron donor system subject to conformational control",
        authors: "Jana, A.; Ishida, M.; Cho, K.; Ghosh, S. K.; Kwak, K.; Ohikubo, K.; Sung, Y.M.; Davis, C.M.; Lynch, V. M.; Lee, D.; Fukuzumi, S.; Kim, D.; Sessler, J. L.",
        reference: "<em>Chem. Commun.</em>, <strong>2013</strong>, 49, 8937-8939.",
        abstract: "stuff"
      }, {
        title: "Bioinorganic Mechanism",
        pubhref: "http://pubs.acs.org/doi/abs/10.1021/ja3018658",
        imgsrc: "jacs2012.gif",
        pubtitle: "A High-Valent Iron-Oxo Corrolazine Activates C-H Bonds via Hydrogen-Atom Transfer",
        authors: "Cho, K.; Leeladee, P.; McGown, A. J.; DeBeer, S.; Goldberg, D. P.",
        reference: "<em> J. Am. Chem. Soc.</em>, <strong>2012</strong>, 134, 7392-7399",
        abstract: "Cytochrome P450 is a vital enzyme for organic life and a constant puzzle in the bioinorganic chemistry community.\
        This enzyme is responsible for C-H activation of substrates which is crucial in the metabolism of hormones, cholesterol, vitamin D, and toxic compounds.\
        Only recently, has the reaction transient species been captured for the enzyme active site. In this study, a biomimetic model complex of cytochrome P450 \
        was utilized in order to study the possible mechanism for the enzyme active site. This model complex has been called corrolazine and is structurally\
        similar to the enzyme active site but has shown greater stability of high-valent metal complexes while yielding similar reactivity. In this study, a \
        statistical analysis approach was used on the C-H oxidation reaction kinetics by monitoring the transient Fe-oxo species stabilized by the biomimetic \
        model via uv-vis spectroscopy. These results in combination with other studies support that hydrogen atom abstraction is the likely reaction pathway for cytochrome P450."
      },{
        title: "Catalytic Nanoparticles",
        pubhref: "www.google.com",
        imgsrc: "inorgchem2010.gif",
        pubtitle: "Preparation, Size Control, Surface Deposition, and Catalytic Reactivity of Hydrophobic Corrolazine Nanoparticles in an Aqueous Environment",
        authors: "Cho, K.; Kerber, W. D.; Lee, S. R.; Wan, A.; Batteas, J. D.; Goldberg, D. P.",
        reference: "<em>Inorg. Chem.</em>, <strong>2010</strong>, 49, 8465-8473",
        abstract: "The phenomenon of nanomaterial reactivity has been one of the great inspirations for modern science.\
        This inspiration has drawn researchers to devote their efforts into developing other "
      },{
        title: "Catalytic Support Nanowires",
        pubhref: "www.google.com",
        imgsrc: "langmuir2009.gif",
        pubtitle: "Synthesis and Optical Properties of Co-Doped ZnO Submicrometer Tubes from Electrospun Fiber Templates",
        authors: "Ochanda, F.; Cho, K.; Andala, D.; Keane, T. C.; Atkinson, A.; Jones, W. E.",
        reference: "<em>Langmuir</em>, <strong>2009</strong>, 25, 7547-7552",
        abstract: "Nanomaterials have shown an incredible phenomenon where their inherent reactivity far exceeded expectations\
        due to what may be called the quantum size effect. This has drawn considerable efforts to not only develop new nanomaterials,\
        but to determine new methods of nanomaterial synthesis which can control their size, shape, functionality and cost to manufacture.\
        This study portrays the creation of Co-doped ZnO nanotubes which builds on my work of Au-doped ZnO nanowires created by\
        electrospinning followed by pyrolysis of the organic template polymer."
      }],
        pubslide = document.querySelector('#pubslide'),
        attachTemplateToData;
    attachTemplateToData = function(template, data) {
        fragment = '';
        if (i < 1) {
          var template = document.querySelector('#plate2').innerHTML;
        }
        else {
          var template = document.querySelector('#template').innerHTML;
        }
          function replace(obj) {
            var t, key, reg;
            for (key in obj) {
              reg = new RegExp('{{' + key + '}}', 'ig');
              t = (t || template).replace(reg, obj[key]);
            };
            return t;
          };
          fragment += replace(data[i]);
          return fragment;
        };
        pubslide.innerHTML = attachTemplateToData(template, data);
    /*document.getElementById("pubvar").src = attachTemplateToData(template, data);*/
    /*document.getElementById("pubvar").src = pubs[i].src;*/

};
