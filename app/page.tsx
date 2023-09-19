import Link from 'next/link';
import { reader } from './reader';
import './styles.css';
import Search from './components/common/search/search';
import RuleTotal from '@components/home/rule-total';
import RulesFilter from '@components/home/rules-filter';
import RuleCard from '@components/home/rule-card';

export default async function Homepage() {
  const rules = await reader.collections.rules.all();
  // sort by lastUpdated

  // TODO: Remove this
  const test = rules[0]
  function getRandomDate() {
    const now = new Date();
    const millisecondsIn6Months = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months * 30 days (average) * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const randomMilliseconds = Math.floor(Math.random() * millisecondsIn6Months);
    return new Date(now.getTime() - randomMilliseconds);
  }

  return (
    <article className='grid grid-cols-12 gap-6 py-6'>
      <section className='grid gap-4 col-span-12 md:col-span-7  xl:col-span-9'>
        <Search />
        <RulesFilter />
        <RuleCard slug={test.slug} title={test.entry.title} lastUpdated={getRandomDate()} blurb={[]} categories={[]} />
        <RuleCard slug={test.slug} title={test.entry.title} lastUpdated={getRandomDate()} blurb={[]} categories={[]} />
        <RuleCard slug={test.slug} title={test.entry.title} lastUpdated={getRandomDate()} blurb={[]} categories={[]} />
        <RuleCard slug={test.slug} title={test.entry.title} lastUpdated={getRandomDate()} blurb={[]} categories={[]} />
      </section>
      <section className='col-span-12 md:col-span-5  xl:col-span-3'>
        <RuleTotal total={rules.length} />
        <div className='mt-6'>
          TODO: Trending
        </div>
      </section>
    </article>
  );
}
