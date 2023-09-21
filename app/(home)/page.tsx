import { reader } from '../reader';
import '../styles.css';
import Search from '@components/common/search/search';
import RuleTotal from '@components/home/server/rule-total';
import RulesFilter from '@components/home/client/rules-filter';
import RuleCard from '@components/home/client/rule-card';
import { useState } from 'react';

export const getPageData = async () => {
  const res = await fetch("/api/getpage");
  const json = await res.json();
}

export default async function Homepage() {
  const allRules = await reader.collections.rules.all();
  const itemsPerPage = 10;

  const currentPage = 1;

  // Get current rules
  const indexOfLastRule = currentPage * itemsPerPage;
  const indexOfFirstRule = indexOfLastRule - itemsPerPage;
  const currentRules = allRules.slice(indexOfFirstRule, indexOfLastRule);

  // TODO: Remove this
  function getRandomDate() {
    const now = new Date();
    const millisecondsIn6Months = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months * 30 days (average) * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const randomMilliseconds = Math.floor(Math.random() * millisecondsIn6Months);
    return new Date(now.getTime() - randomMilliseconds).toISOString();
  }

  return (
    <article className='grid grid-cols-12 gap-6 py-6'>
      <section className='grid gap-4 col-span-12 md:col-span-7 xl:col-span-9'>
        <Search />
        <RulesFilter />
        {/* {currentRules.map(async rule => (
          <RuleCard
            key={rule.slug}
            slug={rule.slug}
            title={rule.entry.title}
            lastUpdated={getRandomDate()}
            blurb={await rule.entry.blurb()}
            categories={[]}
          />
        ))} */}
      </section>
      <section className='col-span-12 md:col-span-5  xl:col-span-3'>
        <RuleTotal total={allRules.length} />
        <div className='mt-6'>
          TODO: Trending
        </div>
      </section>
    </article>
  );
}
