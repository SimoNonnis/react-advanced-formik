import React from 'react';
import PropTypes from 'prop-types';
import { PageOuter, PageInner, BackLinkSection, Title, LegacyBack, BackLink, Arrow } from './style';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  back: PropTypes.string,
  title: PropTypes.string,
  legacy: PropTypes.bool,
};

const defaultProps = {
  back: null,
  title: null,
  legacy: false,
};

const onLegacyBack = () => {
  window.history.back();
};

const PageLayout = ({ children, legacy, back, title }) => {
  const hasBack = legacy || back;
  const backLink = legacy ? (
    <LegacyBack type="link" onClick={onLegacyBack}>
      <Arrow /> Back
    </LegacyBack>
  ) : (
    <BackLink to={back}>
      <Arrow /> Back
    </BackLink>
  );

  return (
    <PageOuter>
      {hasBack && <BackLinkSection>{backLink}</BackLinkSection>}
      <PageInner>
        {title && <Title>{title}</Title>}
        {children}
      </PageInner>
    </PageOuter>
  );
};

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

export default PageLayout;
