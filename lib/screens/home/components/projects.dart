import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/project_card.dart';

class MyProjects extends StatelessWidget {
  const MyProjects({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('My Projects', style: Theme.of(context).textTheme.headlineLarge),
        const Divider(),
        Container(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: const Wrap(
            alignment: WrapAlignment.center,
            spacing: 14,
            runSpacing: 14,
            children: [
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/data-science-speedrun-journey-logo.png',
                ),
                title: 'Data Science Speedrun',
                caption:
                    "A repository contains notebooks and projects related to my data science speedrun journey.",
                url:
                    'https://github.com/mdaffailhami/data_science_speedrun_journey',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/gasku-logo.png',
                ),
                title: 'GasKu',
                caption:
                    'GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia.',
                url: 'https://github.com/mdaffailhami/gasku',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/marketku-logo.png',
                ),
                title: 'MarketKu',
                caption:
                    'MarketKu is a products and services e-commerce application designed to provide convenient shopping experience.',
                url: 'https://github.com/mdaffailhami/marketku',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/mdi-todo-logo.png',
                ),
                title: 'MDI Todo',
                caption:
                    "MDI Todo is a to-do list application designed to help you stay organized and on top of your tasks.",
                url: 'https://github.com/mdaffailhami/mdi-todo',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/nasi-igut-han-logo.jpg',
                ),
                title: 'Nasi Igut Han',
                caption:
                    'Nasi Igut Han is web application designed as an information system for the Nasi Igut Han rice ball business.',
                url: 'https://github.com/mdaffailhami/nasi_igut_han',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/glovikulator-logo.jpg',
                ),
                title: 'Glovikulator',
                caption:
                    'Glovikulator is a user-friendly calculator app. This is also my first app that I built and released using Flutter.',
                url: 'https://github.com/mdaffailhami/glovikulator',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/typing-practice-logo.png',
                ),
                title: 'Typing Practice',
                caption:
                    'Typing Practice is a web application designed to help users improve their typing skills through interactive exercises.',
                url: 'https://github.com/mdaffailhami/typing-practice',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/roller-coaster-data-analysis-logo.png',
                ),
                title: 'Roller Coaster Analysis',
                caption:
                    "Data cleaning, data analysis, and geospatial mapping on roller coaster data to gain insights into it.",
                url:
                    'https://github.com/mdaffailhami/roller-coaster-data-analysis',
              ),
              MyProjectCard(
                image: AssetImage(
                  'assets/project_logos/king-county-homesales-analysis-logo.png',
                ),
                title: 'Homesales Analysis',
                caption:
                    "Data analysis on home sales data in King County, United States, featuring geospatial mapping to visualize trends and factors influencing housing prices.",
                url:
                    'https://github.com/mdaffailhami/king_county_home_sales_analysis',
              ),
              // MyProjectCard(
              //   image: AssetImage(
              //     'assets/project_logos/mdi-blog-logo.png',
              //   ),
              //   title: 'MDI Blog',
              //   caption:
              //       'MDI Blog is a web application that I created when I was studying CRUD. It does work, although the contents are so random.',
              //   url: 'https://blog-mdaffailhami.web.app',
              // ),
            ],
          ),
        ),
      ],
    );
  }
}
