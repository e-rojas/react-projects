import { CopyBlock, tomorrowNight } from 'react-code-blocks';
import { BLOCKS } from '@contentful/rich-text-types';

export function getLanguageFromCode(codeStr) {
  let lang = 'js';
  if (codeStr.includes('/* jsx */')) {
    lang = 'jsx';
  }
  if (codeStr.includes('/* js */')) {
    lang = 'js';
  }
  if (codeStr.includes('/* css */')) {
    lang = 'css';
  }
  if (codeStr.includes('<!-- html -->')) {
    lang = 'html';
  }
  if (codeStr.includes('/* ts */')) {
    lang = 'ts';
  }
  return lang;
}
export const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node?.content[0].marks[0]?.type === 'code') {
        const codeStr = node?.content[0]?.value;
        const lang = getLanguageFromCode(codeStr);

        return (
          <div className='code-block'>
            <CopyBlock
              language={lang}
              text={node?.content[0]?.value}
              showLineNumbers={true}
              theme={tomorrowNight}
              wrapLines={true}
              codeBlock
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          className='img-fluid'
          src={`https://${node?.data?.target?.fields?.file.url}`}
          alt={node?.data?.target?.fields?.description}
        />
      );
    },
  },
};

export function renderOptions(content) {
  let entryMap = new Map();
  if (content?.links?.assets?.block) {
    const assets = content?.links?.assets?.block;
    assets.forEach((asset) => {
      entryMap.set(asset.sys.id, asset);
    });
  }
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node?.content[0].marks[0]?.type === 'code') {
          const codeStr = node?.content[0]?.value;
          const lang = getLanguageFromCode(codeStr);

          return (
            <div className='code-block'>
              <CopyBlock
                language={lang}
                text={node?.content[0]?.value}
                showLineNumbers={true}
                theme={tomorrowNight}
                wrapLines={true}
                codeBlock
              />
            </div>
          );
        }
        return <p>{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1>{children}</h1>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const asset = entryMap.get(node?.data?.target?.sys.id);

        return (
          <div className='center'>
            <img
              className='img-fluid p-1'
              src={asset.url}
              alt={asset.title}
              width={500}
            />
          </div>
        );
      },
    },
  };
}
