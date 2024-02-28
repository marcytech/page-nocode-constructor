import { html, css } from "iares";
import { FamImage, FamTitle } from "fam-code-ui";
import { AppHeader } from "@/components/AppHeader";
import { AppBanner } from "@/components/AppBanner";
import { AppSection } from "@/components/AppSection";
import { AppCard } from "@/components/AppCard";
import { AppContainer } from "@/components/AppContainer";
import { AppAccessibility } from '@/components/AppAccessibility/index';
import { AppReport } from '@/components/AppReport/index';
import { AppText } from "@/components/AppText";
import { AppCosts } from "@/components/AppCosts";
import { WrapSection } from "@/components/WrapSection";
import { AppUpdate } from "@/components/AppUpdate";
import { AppReviewSection } from "@/components/AppReviewSection";
import { AppFormSection } from "@/components/AppFormSection";
import { mediaQueries } from "@/services/mediaQueries";
import { AppFooter } from "../AppFooter";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <div class="gradient-ctx">
      <${AppHeader}/>
      <${AppBanner}/>  
    </div>  
    <${AppSection}>
      <slot target="section">
        <${AppContainer}>
          <slot target="content" ctx="app-home">
            <div class="sm-limit-ctx">
              <div class="grid grid-cols-12">
                <div class="
                  xxl-col-4
                  xl-col-4
                  lg-col-4
                  sm-col-12
                  xs-col-12
                ">
                  <${AppCard}
                    image="/assets/images/icon03.png"
                    title="Launch your service"
                    text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
                  />        
                </div>
                <div class="
                  xxl-col-4
                  xl-col-4
                  lg-col-4
                  sm-col-12
                  xs-col-12
                ">
                  <${AppCard}
                    image="/assets/images/icon01.png"
                    title="User centered desing"
                    text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
                  />        
                </div>
                <div class="
                  xxl-col-4
                  xl-col-4
                  lg-col-4
                  sm-col-12
                  xs-col-12
                ">
                  <${AppCard}
                    image="/assets/images/icon02.png"
                    title="Earn extra money"
                    text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
                  />        
                </div>
              </div>
            </div>
          </slot>
        </>
      </slot>    
    </>
    <${AppAccessibility}>
      <slot target="accessibility">
        <${AppContainer}>
          <slot target="content" ctx="app-home">
            <div class="access-ctx">
              <div class="grid grid-cols-12">
                <div class="
                  xxl-col-6
                  xl-col-6
                  lg-col-6
                  sm-col-12
                  xs-col-12
                ">
                  <${AppReport}>
                    <slot ctx="app-report">
                      <div class="title-ctx">
                        <${FamTitle}>
                          <h1>Trusted by 25,000+  happy customers.</h1>
                        </>    
                      </div>
                      <div class="text-ctx">
                        <${AppText}>
                          <p>With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes.</p>
                        </>
                      </div>
                    </slot>
                  </>  
                </div>                  
                <div class="
                xxl-col-6 
                xl-col-6 
                lg-col-6 
                sm-col-12 
                xs-col-12">
                  <div class="social-ctx">
                    <div class="wrap-report-ctx">
                      <${AppReport}>
                        <slot ctx="app-report">
                          <div class="image-ctx">
                            <${FamImage} 
                              src="/assets/images/image1.png" 
                              fallbackSrc="/assets/images/404.png"
                              alt="image1" 
                            />         
                          </div>                                         
                        </slot>
                      </> 
                    </div>
                    <div class="wrap-report-ctx">
                      <${AppReport}>
                        <slot ctx="app-report">
                          <div class="image-ctx">
                            <${FamImage} 
                              src="/assets/images/image2.png" 
                              fallbackSrc="/assets/images/404.png"
                              alt="image1" 
                            />         
                          </div>                                         
                        </slot>
                      </> 
                    </div>                   
                 </div>
                </div>
              </div>
            </div>
          </slot>        
        </>
      </slot>    
    </>
   <${WrapSection} background="#1787fc">
    <slot target="section">
      <${AppContainer}>
        <slot target="content">
          <div class="grid grid-cols-12">
            <div class="
              xxl-col-start-7 xxl-col-end-13
              xxl-row-start-1
              xl-col-start-7 xl-col-end-13
              xl-row-start-1
              lg-col-start-7 lg-col-end-13  
              lg-row-start-1
              sm-col-12
              xs-col-12
            ">
              <${AppCosts}/> 
            </div>    
            <div class="
              xxl-col-start-1 xxl-col-end-7
              xxl-row-start-1
              xl-col-start-1 xl-col-end-7
              xl-row-start-1
              lg-col-start-1 lg-col-end-7
              lg-row-start-1
              sm-col-12
              xs-col-12
            ">
              <${FamImage} 
                src="/assets/images/custs.png" 
                fallbackSrc="/assets/images/404.png"
                alt="person" 
              />
            </div>         
          </div>
        </slot>    
      </>    
    </slot>
   </>
   <${AppUpdate}/>
   <${AppReviewSection}/>
   <${AppFormSection}/>
   <${AppFooter}/>
</div>
`;

export const AppHome = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-home,
  .wrap-ctx,
  .gradient-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;
    width:100%;
    background: #e3f6fc;
  }
  .gradient-ctx {
    background-image: linear-gradient(
      310deg,
      hsl(0deg 0% 100%) 0%,
      hsl(219deg 42% 97%) 10%,
      hsl(218deg 42% 95%) 16%,
      hsl(218deg 42% 92%) 22%,
      hsl(218deg 42% 90%) 28%,
      hsl(218deg 42% 87%) 35%,
      hsl(218deg 42% 90%) 43%,
      hsl(218deg 42% 92%) 53%,
      hsl(218deg 42% 95%) 64%,
      hsl(219deg 42% 97%) 79%,
      hsl(0deg 0% 100%) 100%
    );
  }

   .sm-limit-ctx {
      width:100%;
      display: flex;
      text-align: center;
      padding:3em 0 0 0;
   }

   .wrap-report-ctx,
   .social-ctx {
      display: flex;
      width:100%;
      justify-content: center;
      align-items: center; 
      padding:1em 0 0 0;
   }

  ${media.xxl(css`
    .social-ctx {
      gap: 1em;
    }
    .wrap-report-ctx {
      width:50%;
      padding:0
    }
  `)} 

  ${media.xl(css`
    .social-ctx {
      gap: 1em;
    }
    .wrap-report-ctx {
      width:50%;
      padding:0
    }
  `)} 

  ${media.lg(css`
    .social-ctx {
      gap: 1em;
    }
    .wrap-report-ctx {
      width:50%;
      padding:0
    }
  `)} 
  
  ${media.sm(css`
    .social-ctx {
      width:100%;
      flex-wrap: wrap;
    }
    .sm-limit-ctx {
      max-width:480px;
      margin:0 auto;
    }

    .wrap-report-ctx {
      width:100%;
      padding:1em;
    }
  `)} 

  ${media.xs(css`
    .social-ctx {
      width:100%;
      flex-wrap: wrap;
    }
    .sm-limit-ctx {
      max-width:350px;
      margin:0 auto;
    }
  `)} 
`;
