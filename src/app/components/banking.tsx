import React from 'react';

export default function SponsorshipDetails() {
  return (
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sponsor a Learner for Career Guidance & Support</h2>
      <p className="mx-auto text-justify max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
      Donate as little as R100 to help learners with career guidance and support
      </p>
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Account Name</th>
              <th className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Bank</th>
              <th className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Account No.</th>
              <th className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Branch</th>
            </tr>
          </thead>
          <tbody className="[&amp;_tr:last-child]:border-0">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">FUTURE PATHWAYS CONSULTANTS NPC</td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">FIRST NATIONAL BANK</td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">63025588550</td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">220323</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
