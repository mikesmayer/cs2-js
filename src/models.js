window.c.models = (function(m){
  var contributionDetail = m.postgrest.model('contribution_details'),

  projectDetail = m.postgrest.model('project_details'),

  teamTotal = m.postgrest.model('team_totals', [
    'member_count', 'countries', 'total_contributed_projects',
    'total_cities', 'total_amount'
  ]),

  projectContributionsPerDay = m.postgrest.model('project_contributions_per_day'),
  projectContributionsPerLocation = m.postgrest.model('project_contributions_per_location'),

  teamMember = m.postgrest.model('team_members');
  teamMember.pageSize(40);

  return {
    contributionDetail: contributionDetail,
    projectDetail: projectDetail,
    teamTotal: teamTotal,
    teamMember: teamMember,
    projectContributionsPerDay: projectContributionsPerDay,
    projectContributionsPerLocation: projectContributionsPerLocation
  };
}(window.m));
