import React from 'react';

import {Link} from 'react-router-dom'

import document1 from './Website PDFs/fawcett2016-1.pdf'
import document2 from './Website PDFs/fawcett2016 - 2.pdf'
import document3 from './Website PDFs/fawcett2016 - 3.pdf'
import document4 from './Website PDFs/huff2014 - 4.pdf'
import document5 from './Website PDFs/fawcett2015 - 5.pdf'
import document6 from './Website PDFs/white2014 - 6.pdf'
import document7 from './Website PDFs/bodner2013 - 7.pdf'
import document8 from './Website PDFs/fawcett2013 - 8.pdf'
import document9 from './Website PDFs/russell2013 - 9.pdf'
import document10 from './Website PDFs/fawcett2013 - 10.pdf'

const Publication = () => {
    return (

        <div>
        <h3 id = "list-research-header" className = "mx-auto" style = {{textAlign: 'center' }}>List of publications</h3>
        
        <div className = "mx-auto row" id = "list-publication">

          
          <div className="list-group col-sm w-100 p-3">
            <a  href="https://www.sciencedirect.com/science/article/pii/S2211368116300699" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Looking Down the Barrel of a Gun: What Do We Know About the Weapon Focus Effect? <span className="text-muted">(2014)
            <Link
                to={document1}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>


            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4886847/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Familiarity, but not recollection, supports the between-subject production effect. <span className="text-muted">(2016)
            <Link
                to={document2}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>

            <a href="https://www.ncbi.nlm.nih.gov/pubmed/26709589" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The representational consequences of intentional forgetting: Impairments to both the probability and fidelity of long-term memory. <span className="text-muted">(2016)
            <Link
                to={document3}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24853535" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Effects of distinctive encoding on correct and false memory: A meta-analytic review of costs and benefits and their origins in the DRM paradigm. <span className="text-muted">(2015)
            <Link
                to={document4}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/25462596" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">The origins of repetitive thought in rumination: Separating cognitive style from deficits in inhibitory control over memory. <span className="text-muted">(2015)
            <Link
                to={document5}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>  
          </div>

          <div className="list-group col-sm w-100 p-3">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24064067" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Electrophysiological markers of biological motion and human form recognition. <span className="text-muted">(2014)
            <Link
                to={document6}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23884689" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The costs and benefits of production in recognition. <span className="text-muted">(2014)
            <Link
                to={document7}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0001691813001571" target="_blank" rel="noopener noreferrer" style = {{ paddingBottom: '20px'}} className="list-group-item list-group-item-action">Event-method directed forgetting: Forgetting a video segment is more effortful than remembering it. <span className="text-muted">(2013)
            <Link
                to={document8}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23656845" target="_blank" rel="noopener noreferrer" style = {{ paddingBottom: '20px'}} className="list-group-item list-group-item-action">Risk of obsessive-compulsive disorder in pregnant and post-partum women: A meta-analysis <span className="text-muted">(2013)
            <Link
                to={document9}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0001691812001680" target="_blank" rel="noopener noreferrer" style = {{ paddingBottom: '20px'}} className="list-group-item list-group-item-action ">The production effect benefits performance in between-subject designs: A meta-analysis. <span className="text-muted">(2013)
            <Link
                to={document10}
                target="_blank" download style={{paddingLeft: '4px'}}>
                (pdf)  
            </Link></span></a>
          </div>

      </div>
      </div>
    );

}

export default Publication;